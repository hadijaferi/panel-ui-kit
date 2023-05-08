import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

type IConfigSlider = Readonly<Swiper> | null;

interface ISliderItemsProps {
  config?: IConfigSlider;
  Skeleton?: any;
  countItem: number;
  isLoading: boolean;
  children: any;
}

const SliderItemsMobile = (props: ISliderItemsProps) => {
  let count = Math.ceil(Number(props.config?.slidesPerView));
  if (Number.isNaN(count)) {
    count = 4;
  }
  return (
    <div>
      {props.isLoading ? (
        <div className="swiper_container">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.8}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            {...props.config}>
            {[...Array(count)].map((_, i) => {
              return (
                <SwiperSlide key={`item_${i}`}>
                  <props.Skeleton />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <Swiper
          spaceBetween={16}
          slidesPerView={1.8}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          {...props.config}>
          {props.children}
        </Swiper>
      )}
    </div>
  );
};
export default SliderItemsMobile;
