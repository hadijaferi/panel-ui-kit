import React from "react";
import dynamic from "next/dynamic";
import BaseResponsive from "../../infrastructure/BaseComponents/BaseResponsive";
import { ISearchContainerProps } from "./Hooks/useSearch";

const Mobile = dynamic(() => import("./Mobile/Mobile"));
const Desktop = dynamic(() => import("./Desktop/Desktop"));

const SearchPageContainer = (props: ISearchContainerProps) => {
  return (
    <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
      {(CategoryPage: any) => <CategoryPage {...props} />}
    </BaseResponsive>
  );
};

export default SearchPageContainer;
