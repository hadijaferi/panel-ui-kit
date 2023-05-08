import React from "react";
import generateClassName from "../../../Share/Helpers/Dom/generateClassName";
import MainSlider from "../Component/Common/MainSlider/MainSlider";
import LeftMainSlider from "../Component/Common/LeftMainSlider/LeftMainSlider";
import BusinessUnits from "../Component/Common/BusinessUnits/BusinessUnits";
import Style from "../Component/Common/HomePage.module.sass";
import CategoriesContainer from "./Componets/CategoriesList";
import ListSectionDesktop from "../../../Share/Components/ListSection/Desktop/ListSectionDesktop";
import GetFromContext from "../Hooks/GetFromContext";
import Advertisement from "../../../Share/Components/ApplicationComponents/Advertisement/Advertisement";
import pic1 from "../../../Resources/image/Banner/home-b-2.jpg";
import pic2 from "../../../Resources/image/Banner/home-m-1.jpg";
import pic3 from "../../../Resources/image/Banner/home-m-2.jpg";
import pic4 from "../../../Resources/image/Banner/home-s-1.jpg";
import pic5 from "../../../Resources/image/Banner/home-s-2.jpg";
import pic6 from "../../../Resources/image/Banner/home-s-3.jpg";

const HomePageDesktop = () => {
  const {
    SelectedProducts,
    SelectedServices,
    RecommendedProducts,
    RecommendedServices,
    RecentlyAddedServices,
    RecentlyAddedProducts,
    ProductsCategories,
    ServicesCategories,
    Mieters,
  } = GetFromContext();

  return (
    <>
      <div className={generateClassName(["container", Style.noPadding])}>
        <div className={Style.homePageTop}>
          <div className={Style.mainSlider}>
            <MainSlider />
          </div>
          <div className={Style.leftMainSlider}>
            <LeftMainSlider />
          </div>
        </div>
      </div>
      <div className="container">
        <ListSectionDesktop
          Type="product"
          Name={SelectedProducts.Name}
          Items={SelectedProducts.Items}
        />
      </div>
      <CategoriesContainer
        ProductsCategories={ProductsCategories}
        ServicesCategories={ServicesCategories}
      />
      <div className="container">
        <ListSectionDesktop
          Type="service"
          Name={SelectedServices.Name}
          Items={SelectedServices.Items}
        />
        <BusinessUnits items={Mieters} />
        <div className="d-flex m-y-32">
          <Advertisement url={pic1} />
        </div>
        <ListSectionDesktop
          Type="service"
          Name={RecommendedServices.Name}
          Items={RecommendedServices.Items}
        />
        <div className="d-flex m-y-32">
          <Advertisement url={pic4} />
          <Advertisement url={pic5} />
          <Advertisement url={pic6} />
        </div>
        <ListSectionDesktop
          Type="product"
          Name={RecommendedProducts.Name}
          Items={RecommendedProducts.Items}
        />
        <div className="d-flex m-y-32">
          <Advertisement url={pic2} />
          <Advertisement url={pic3} />
        </div>
        <ListSectionDesktop
          Type="service"
          Name={RecentlyAddedServices.Name}
          Items={RecentlyAddedServices.Items}
        />
        <ListSectionDesktop
          Type="product"
          Name={RecentlyAddedProducts.Name}
          Items={RecentlyAddedProducts.Items}
        />
      </div>
    </>
  );
};

export default HomePageDesktop;
