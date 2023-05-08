import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItems from "../../Desktop/SliderItems/SliderItems";
import ServiceBoxSkeleton from "../../Common/ServiceBox/Skeleton";
import { IHomePageContextData } from "../../../../Modules/Home/Models/IContext";
import ButtonLink from "../../Common/Button/ButtonLink";
import Icon from "../../Common/Icon/Icon";
import CustomBox from "../../Common/CustomBox/CustomBox";

type IListSectionDesktopTypes = "service" | "product";

interface IListSectionDesktop extends IHomePageContextData {
  MoreOption?: {
    title?: string;
    link?: string;
    hasIcon?: boolean;
  };
  Type: IListSectionDesktopTypes;
  Loading?: boolean;
  ConfigSwiper?: Swiper;
}

/**
 *
 * ListSectionDesktop
 *
 * contains header and body
 * header is title and more option
 * body is slider
 *
 * @see IHomePageContextData
 * @param Name
 * @param Items
 * @param Type
 * @param MoreOption
 * @param Loading
 * @param ConfigSwiper
 * @author Hadi Zare hadizareoriginal@gmail.com
 * @version 1.1.1
 */
const ListSectionDesktop = ({
  Name,
  Items,
  Type,
  MoreOption,
  Loading,
  ConfigSwiper,
}: IListSectionDesktop) => {
  const hasIcon = MoreOption?.hasIcon ?? true;
  const isLoading = Loading ?? false;

  return (
    <div>
      {!isLoading && !!Items.length && (
        <div className="d-flex flex-x-between flex-y-center">
          <span className="fontWeight-700 fontSize-20 m-b-8">{Name}</span>
          {MoreOption && (
            <ButtonLink theme="forButtonLink" href={MoreOption?.link || "#"}>
              <span className="m-l-8">{MoreOption?.title || "مشاهده همه"}</span>
              {hasIcon ? <Icon name="arrow-left-circle" size="large" /> : null}
            </ButtonLink>
          )}
        </div>
      )}
      <SliderItems
        config={
          ConfigSwiper ?? {
            navigation: false,
            slidesPerView: 6,
            spaceBetween: 16,
            breakpoints: {
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1440: {
                slidesPerView: 6,
              },
            },
          }
        }
        Skeleton={ServiceBoxSkeleton}
        isLoading={isLoading}
        countItem={Items?.length || 0}>
        {Items?.map((serviceItem, index) => (
          <SwiperSlide key={`item${serviceItem.Id ?? index}`}>
            <CustomBox entity={serviceItem} type={Type} />
          </SwiperSlide>
        ))}
      </SliderItems>
    </div>
  );
};

export default ListSectionDesktop;
