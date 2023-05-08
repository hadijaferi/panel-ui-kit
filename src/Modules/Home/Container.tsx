import React from "react";
import dynamic from "next/dynamic";
import { IHomePageContext } from "./Models/IContext";
import BaseResponsive from "../../infrastructure/BaseComponents/BaseResponsive";

const HomePageDesktop = dynamic(() => import("./Desktop/Desktop"));
const HomePageMobile = dynamic(() => import("./Mobile/Mobile"));

export const homePageContext = React.createContext({} as IHomePageContext);

interface IHomePageContainerProps {
  data: IHomePageContext;
}

const HomePageContainer = ({ data }: IHomePageContainerProps) => {
  const returnContext = (): IHomePageContext => {
    return {
      SelectedProducts: data.SelectedProducts,
      SelectedServices: data.SelectedServices,
      RecommendedServices: data.RecommendedServices,
      RecommendedProducts: data.RecommendedProducts,
      RecentlyAddedProducts: data.RecentlyAddedProducts,
      RecentlyAddedServices: data.RecentlyAddedServices,
      ProductsCategories: data.ProductsCategories,
      ServicesCategories: data.ServicesCategories,
      Mieters: data.Mieters,
    };
  };

  return (
    <homePageContext.Provider value={returnContext()}>
      <BaseResponsive
        MobileComponent={HomePageMobile}
        DesktopComponent={HomePageDesktop}>
        {(Hmp: any) => <Hmp />}
      </BaseResponsive>
    </homePageContext.Provider>
  );
};

export default HomePageContainer;
