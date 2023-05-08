import React from "react";
import { SwiperSlide } from "swiper/react";
import ButtonLink from "../../../../../../Share/Components/Common/Button/ButtonLink";
import SliderItemsMobile from "../../../../../../Share/Components/Mobile/SliderItems/SliderItems";
import CategoryRowItemMobile from "../../../../../../Share/Components/Mobile/CategoryRowItemMobile/CategoryRowItemMobile";
import loadingPhoto from "../../../../../../Resources/image/defaultStore.jpg";
import { IHomePageCategory } from "../../../../Models/HomePageCategories/IHomePageCategory";

interface ICategoriesListSectionMobile {
  title: string;
  linkToPage: string;
  items?: IHomePageCategory[];
}

const CategoriesListSectionMobile = (props: ICategoriesListSectionMobile) => {
  return (
    <div className="m-t-32">
      <div className="m-b-16">
        <div className="d-flex flex-x-between flex-y-center m-x-16">
          <div className="fontWeight-700 fontSize-16">{props.title}</div>
          <ButtonLink theme="forButtonLink" href={props?.linkToPage || "#"}>
            <span className="colorBlue fontWeight-500 fontSize-14">
              مشاهده همه
            </span>
          </ButtonLink>
        </div>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <SliderItemsMobile
          Skeleton={<span>loading</span>} // todo loading for SliderItemsMobile
          config={{ spaceBetween: 16, slidesPerView: 4 }}
          isLoading={false}
          countItem={props.items?.length || 0}>
          {props.items?.map(item => (
            <SwiperSlide key={`serviceItem${item.Id}`}>
              <CategoryRowItemMobile
                photo={item?.Picture?.Url || loadingPhoto}
                name={item?.Name || "آیتم"}
                link={{ href: "#" }}
              />
            </SwiperSlide>
          ))}
        </SliderItemsMobile>
      </div>
    </div>
  );
};

export default CategoriesListSectionMobile;
