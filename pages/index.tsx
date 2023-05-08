import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import { ILayouts } from "../src/infrastructure/Models/Theme/ILayouts";
import HomePageServices from "../src/Modules/Home/Services/HomePageServices";
import { IHomePageListsResponse } from "../src/Modules/Home/Models/HomePageLists/IHomePageListsResponse";
import HomePageContainer from "../src/Modules/Home/Container";
import { IProduct } from "../src/infrastructure/Models/Entity/IProduct";
import { INameItemsData } from "../src/Modules/Home/Models/INameItemsData";
import getDeviceTypeWithUser from "../utils/getDeviceTypeWithUser";
import { DeviceTypes } from "../src/infrastructure/Models/Theme/IDeviceTypes";
import { IHomePageCategoriesResponse } from "../src/Modules/Home/Models/HomePageCategories/IHomePageCategoriesResponse";
import { IMieter } from "../src/infrastructure/Models/Entity/IMieter";
import { firebaseCloudMessaging } from "../utils/webPush";

export const getServerSideProps: GetServerSideProps = async context => {
  const isMobile = getDeviceTypeWithUser(context.req) === DeviceTypes.Mobile;
  const res = await HomePageServices.getHomePageLists();
  const resTwo = await HomePageServices.getCategories({ Mobile: isMobile });
  const resMieters = await HomePageServices.getMieters();
  return {
    props: {
      data: res.data.Data,
      categories: resTwo.data.Data,
      mieters: resMieters.data.Data,
      Layout: ILayouts.WEBSITE,
    },
  };
};

interface IHomePageServerSideProps {
  data: IHomePageListsResponse;
  categories: IHomePageCategoriesResponse;
  mieters: IMieter[];
}

enum IProductListItemTypes {
  SelectedProducts = 1,
  SelectedServices,
  RecommendedProducts,
  RecommendedServices,
  RecentlyAddedProducts = 7,
  RecentlyAddedServices = 8,
}

const HomePage = (props: IHomePageServerSideProps) => {
  const getItem = (
    type: IProductListItemTypes,
  ): INameItemsData<Partial<IProduct>[]> => {
    for (let i = 0; i < props.data?.length; i += 1) {
      if (props.data?.[i]?.HomepageProductTypeId === type) {
        return {
          Name: props.data?.[i]?.HomepageProductType || "",
          Items: props.data?.[i]?.ProductCards || [],
        };
      }
    }
    return {
      Name: "",
      Items: [],
    };
  };
  useEffect(() => {
    // firebase cloud messaging
    firebaseCloudMessaging.init();
  }, []);
  return (
    <HomePageContainer
      data={{
        SelectedProducts: getItem(IProductListItemTypes.SelectedProducts),
        SelectedServices: getItem(IProductListItemTypes.SelectedServices),
        RecommendedServices: getItem(IProductListItemTypes.RecommendedServices),
        RecommendedProducts: getItem(IProductListItemTypes.RecommendedProducts),
        RecentlyAddedProducts: getItem(
          IProductListItemTypes.RecentlyAddedProducts,
        ),
        RecentlyAddedServices: getItem(
          IProductListItemTypes.RecentlyAddedServices,
        ),
        ProductsCategories: props.categories.ProductsCategories,
        ServicesCategories: props.categories.ServicesCategories,
        Mieters: props.mieters,
      }}
    />
  );
};

export default HomePage;
