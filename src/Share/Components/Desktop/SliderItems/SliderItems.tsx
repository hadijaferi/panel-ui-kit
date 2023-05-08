import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import styles from "./SliderItems.module.sass";
import generateKey from "../../../../../utils/generateKey";
import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";
import generateClassName from "../../../Helpers/Dom/generateClassName";

SwiperCore.use([Navigation]);

type IConfigSlider = Readonly<Swiper>;

interface ISliderItemsProps extends IBaseComponentProps {
  config?: IConfigSlider;
  Skeleton?: any;
  countItem: number;
  isLoading?: boolean;
  children: any;
}

const SliderItemsDesktop = ({
  config = {
    slidesPerView: 5,
    spaceBetween: 16,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 5,
      },
    },
  },
  ...props
}: ISliderItemsProps) => {
  let count = Math.ceil(Number(config?.slidesPerView));
  if (Number.isNaN(count)) {
    count = 4;
  }
  return (
    <div
      className={generateClassName([
        config?.slidesPerView === "auto" && styles.sliderItems,
      ])}>
      <div className={generateClassName([props.className, "swiper_container"])}>
        {props.isLoading ? (
          <Swiper {...config}>
            {[...Array(count)].map(_i => {
              return (
                <SwiperSlide key={generateKey()}>
                  <props.Skeleton />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <Swiper
            watchOverflow
            navigation={
              !!(props.countItem < (config?.slidesPerView as Number) || 5)
            }
            {...config}>
            {props.children}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default SliderItemsDesktop;
