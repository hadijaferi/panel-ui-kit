import React from "react";
import { SwiperSlide } from "swiper/react";
import SliderItems from "../../../Desktop/SliderItems/SliderItems";
import { LINKS } from "../../../../Constants/LINKS";
import { returnStatus } from "../../../../Helpers/returnStatus";
import { StatusComponent } from "../../../../../infrastructure/Enum/StatusComponent";
import useOtherSellers from "../Hooks/OtherSellers";
import StoreBox from "../../../Common/StoreBox/StoreBox";
import ProductBoxSkeleton from "../../../Common/ProductBox/Skeleton";

export interface IOtherSellersProps {
  mieterId: number;
  title: string;
}

const OtherSellersDesktop = (props: IOtherSellersProps) => {
  const OtherSellers = useOtherSellers({
    mieterId: props.mieterId,
  });
  // also handle loading
  const renderSlider = () => {
    return (
      <SliderItems
        Skeleton={ProductBoxSkeleton}
        isLoading={OtherSellers.isLoading}
        countItem={OtherSellers.otherSellers.length}>
        {OtherSellers?.otherSellers.map(Seller => {
          return (
            <SwiperSlide key={`otherSellers${Seller.Id}`}>
              <StoreBox
                store={Seller}
                link={{
                  href: LINKS.SERVICE,
                  as: LINKS.SERVICE.replace("[id]", String(Seller.Id)),
                }}
              />
            </SwiperSlide>
          );
        })}
      </SliderItems>
    );
  };

  const renderStatus = () => {
    const status = returnStatus(
      OtherSellers.isLoading,
      OtherSellers.otherSellers.length,
    );
    switch (status) {
      case StatusComponent.full:
        return (
          <>
            <div className="fontWeight-700 fontSize-20 m-b-16">
              {props.title}
            </div>
            <div className="m-b-64">{renderSlider()}</div>
          </>
        );
      case StatusComponent.loading:
        return (
          <>
            <div className="m-b-64">{renderSlider()}</div>
          </>
        );
      default:
        return null;
    }
  };

  return renderStatus();
};
export default OtherSellersDesktop;
