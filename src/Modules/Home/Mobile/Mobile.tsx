import React, { FC, useMemo, useState } from "react";
import { SwiperSlide } from "swiper/react";
import Style from "../Component/Common/HomePage.module.sass";
import MainSlider from "../Component/Common/MainSlider/MainSlider";
import LeftMainSlider from "../Component/Common/LeftMainSlider/LeftMainSlider";
import BusinessUnits from "../Component/Common/BusinessUnits/BusinessUnits";
import CategoriesListMobile from "./Components/CategoriesListMobile";
import GetFromContext from "../Hooks/GetFromContext";
import ListSectionMobile from "../../../Share/Components/ListSection/Mobile/ListSectionMobile";
import { IAppBarTab } from "../../../Share/Components/Mobile/TabBar/ITabBarProps";
import Toolbar from "../../../Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarHome from "../../../Share/Components/Mobile/Toolbar/Components/ToolbarHome/ToolbarHome";
import NavigationDrawer from "../../../Share/Components/Mobile/NavigationDrawer/NavigationDrawer";
import BottomNavigation from "../../../Share/Components/Mobile/BottomNavigation/BottomNavigation";
import TabBar from "../../../Share/Components/Mobile/TabBar/TabBar";
import BottomSheet from "../../../Share/Components/Mobile/BottomSheet/BottomSheet";
import Page from "../../../Share/Components/Mobile/Page/Page";
import Advertisement from "../../../Share/Components/ApplicationComponents/Advertisement/Advertisement";
import pic1 from "../../../Resources/image/Banner/home-s-1.jpg";
import pic2 from "../../../Resources/image/Banner/home-s-2.jpg";
import pic3 from "../../../Resources/image/Banner/home-s-3.jpg";
import SliderItems from "../../../Share/Components/Mobile/SliderItems/SliderItems";

const HomePageMobile = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [navigationDrawerIsOpen, setNavigationDrawerIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [bottomSheet2Open, setBottomSheet2Open] = useState(false);
  const [appBarActiveId, setAppBarActiveId] = useState(0);
  const appBarItems: IAppBarTab[] = [
    {
      id: 0,
      title: "خانه",
      icon: "m-home",
    },
    {
      id: 1,
      title: "دسته بندی",
      icon: "category",
    },
    {
      id: 2,
      title: "سبدخرید",
      icon: "cart",
    },
    {
      id: 3,
      title: "گفتگو",
      icon: "chat",
    },
  ];

  const {
    SelectedProducts,
    SelectedServices,
    RecommendedProducts,
    RecommendedServices,
    RecentlyAddedProducts,
    RecentlyAddedServices,
    ProductsCategories,
    ServicesCategories,
  } = GetFromContext();

  const HomePageContent: FC = () => (
    <>
      <div className={Style.homePageTop}>
        <div className={Style.mainSlider}>
          <MainSlider />
        </div>
        <div className={Style.leftMainSlider}>
          <LeftMainSlider />
        </div>
      </div>
      <ListSectionMobile
        Name={SelectedProducts.Name}
        Items={SelectedProducts.Items}
      />
      <CategoriesListMobile
        ProductsCategories={ProductsCategories}
        ServicesCategories={ServicesCategories}
      />
      <div className="m-y-24">
        <SliderItems
          config={{
            spaceBetween: 8,
            slidesPerView: 1.5,
          }}
          countItem={3}
          isLoading={false}>
          <SwiperSlide>
            <Advertisement url={pic1} />
          </SwiperSlide>
          <SwiperSlide>
            <Advertisement url={pic2} />
          </SwiperSlide>
          <SwiperSlide>
            <Advertisement url={pic3} />
          </SwiperSlide>
        </SliderItems>
      </div>
      <ListSectionMobile
        Name={SelectedServices.Name}
        Items={SelectedServices.Items}
      />
      <div className="container" style={{ height: "auto" }}>
        <BusinessUnits remove />
      </div>
      <div className="m-y-24">
        <SliderItems
          config={{
            spaceBetween: 8,
            slidesPerView: 1.5,
          }}
          countItem={3}
          isLoading={false}>
          <SwiperSlide>
            <Advertisement url={pic3} />
          </SwiperSlide>
          <SwiperSlide>
            <Advertisement url={pic1} />
          </SwiperSlide>
          <SwiperSlide>
            <Advertisement url={pic2} />
          </SwiperSlide>
        </SliderItems>
      </div>
      <ListSectionMobile
        Name={RecommendedServices.Name}
        Items={RecommendedServices.Items}
      />
      <ListSectionMobile
        Name={RecommendedProducts.Name}
        Items={RecommendedProducts.Items}
      />

      <ListSectionMobile
        Name={RecommendedProducts.Name}
        Items={SelectedProducts.Items}
      />
      <ListSectionMobile
        Name={RecentlyAddedServices.Name}
        Items={RecentlyAddedServices.Items}
      />
      <ListSectionMobile
        Name={RecentlyAddedProducts.Name}
        Items={RecentlyAddedProducts.Items}
      />
      <br />
    </>
  );

  return (
    <Page
      toolbar={() => (
        <Toolbar>
          <ToolbarHome
            onNavigationClick={() => setNavigationDrawerIsOpen(true)}
            searchIsOpen={searchIsOpen}
            setSearchIsOpen={setSearchIsOpen}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
          />
        </Toolbar>
      )}
      navigationDrawer={() => (
        <NavigationDrawer
          isOpen={navigationDrawerIsOpen}
          onDrawerToggle={setNavigationDrawerIsOpen}>
          <span className="p-x-16">در دست ساخت</span>
        </NavigationDrawer>
      )}
      bottomNavigation={() => (
        <BottomNavigation>
          <TabBar
            activeId={appBarActiveId}
            tabs={appBarItems}
            onTabBarChange={setAppBarActiveId}
          />
        </BottomNavigation>
      )}
      bottomSheet={() => (
        <>
          <BottomSheet isOpen={bottomSheetOpen} onToggle={setBottomSheetOpen}>
            <div className="p-16">تست</div>
          </BottomSheet>

          <BottomSheet
            fixed
            isOpen={bottomSheet2Open}
            onToggle={setBottomSheet2Open}>
            <div className="p-16">تست</div>
          </BottomSheet>
        </>
      )}>
      {useMemo(() => {
        return <HomePageContent />;
      }, [])}
    </Page>
  );
};

export default HomePageMobile;
