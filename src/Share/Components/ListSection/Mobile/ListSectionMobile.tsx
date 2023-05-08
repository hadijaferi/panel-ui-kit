import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import ServiceBoxSkeleton from "../../Common/ServiceBox/Skeleton";
import { IHomePageContextData } from "../../../../Modules/Home/Models/IContext";
import SliderItemsMobile from "../../Mobile/SliderItems/SliderItems";
import ButtonLink from "../../Common/Button/ButtonLink";
import CustomBox from "../../Common/CustomBox/CustomBox";

interface IListSectionMobile extends IHomePageContextData {
  moreOption?: {
    title?: string;
    link?: string;
  };
  Type?: "product" | "service";
  Loading?: boolean;
  ConfigSwiper?: Swiper;
}

/**
 *
 * ListSectionMobile
 *
 * contains header and body
 * header is title and more option
 * body is slider
 *
 * @see IHomePageContextData
 * @author Hadi Zare hadizareoriginal@gmail.com
 * @version 1.1.0
 * @param props
 */
const ListSectionMobile = (props: IListSectionMobile) => {
  const isLoading = props?.Loading ?? false;
  return (
    <div>
      <div className="d-flex flex-x-between flex-y-center m-b-16 m-t-32 m-r-16 m-l-16">
        <span className="fontWeight-700 fontSize-16">{props.Name || ""}</span>
        {props.moreOption && (
          <ButtonLink theme="forButtonLink" href={props.moreOption.link || "#"}>
            <span className="colorBlue fontWeight-500">
              {props.moreOption.title || "مشاهده همه"}
            </span>
          </ButtonLink>
        )}
      </div>
      <SliderItemsMobile
        config={props.ConfigSwiper}
        Skeleton={ServiceBoxSkeleton}
        isLoading={isLoading}
        countItem={props.Items?.length || 0}>
        {props.Items?.map(item => (
          <SwiperSlide key={`item${item.Id}`}>
            <CustomBox type={props.Type ?? "product"} entity={item} />
          </SwiperSlide>
        ))}
      </SliderItemsMobile>
    </div>
  );
};

export default ListSectionMobile;
