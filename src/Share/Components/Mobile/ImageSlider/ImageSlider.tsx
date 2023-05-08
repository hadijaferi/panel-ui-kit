import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import style from "./ImageSlider.module.sass";
import { IImageSliderProps } from "./Models/IImageSliderProps";
import Image from "../../Common/Image/Image";

SwiperCore.use([Pagination]);

const ImageSliderMobile = ({ images, showLength }: IImageSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={style.acMobileSlider}>
      <div className={style.acMobileSlider__pages}>{`${activeIndex + 1}/${
        images.length
      }`}</div>
      <Swiper
        className={style.acMobileSlider__wrapper}
        slidesPerView={1}
        onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
        pagination={{
          clickable: true,
        }}
        centeredSlides>
        {images?.slice(0, showLength ?? 6).map(image => (
          <SwiperSlide key={image.Id} className={style.acMobileSlider__slide}>
            <Image src={image.Url} alt={image.AltAttribute} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ImageSliderMobile;
