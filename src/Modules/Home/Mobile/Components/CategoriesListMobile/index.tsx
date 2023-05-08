import React from "react";
import CategoriesListSectionMobile from "./Components/CategoriesListSectionMobile";
import { IHomePageCategory } from "../../../Models/HomePageCategories/IHomePageCategory";

interface ICategoriesListMobile {
  ProductsCategories: IHomePageCategory[];
  ServicesCategories: IHomePageCategory[];
}

const CategoriesListMobile = ({
  ProductsCategories,
  ServicesCategories,
}: ICategoriesListMobile) => {
  return (
    <>
      <CategoriesListSectionMobile
        title="دسته بندی محصولات"
        linkToPage="#" // todo pend api
        items={ServicesCategories}
      />
      <CategoriesListSectionMobile
        title="دسته بندی خدمات"
        linkToPage="#" // todo pend api
        items={ProductsCategories}
      />
    </>
  );
};

export default CategoriesListMobile;
