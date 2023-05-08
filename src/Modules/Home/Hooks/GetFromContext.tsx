import { useContext } from "react";
import { homePageContext } from "../Container";
import { IHomePageContext } from "../Models/IContext";

type IReturnGetFromContext = IHomePageContext;
const GetFromContext = () => {
  const contextSdp = useContext(homePageContext);
  const returnProps = (): IReturnGetFromContext => {
    const {
      SelectedProducts,
      SelectedServices,
      RecentlyAddedProducts,
      RecentlyAddedServices,
      RecommendedProducts,
      RecommendedServices,
      ProductsCategories,
      ServicesCategories,
      Mieters,
    } = contextSdp;
    return {
      SelectedProducts,
      SelectedServices,
      RecentlyAddedProducts,
      RecentlyAddedServices,
      RecommendedProducts,
      RecommendedServices,
      ProductsCategories,
      ServicesCategories,
      Mieters,
    };
  };

  return returnProps();
};

export default GetFromContext;
