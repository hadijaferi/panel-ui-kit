import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import style from "./MainSlider.module.sass";
import HomePageServices from "../../../Services/HomePageServices";
import { IMainSliderResponse } from "../../../Models/MainSlider/IMainSliderResponse";

SwiperCore.use([Pagination, Navigation]);

const MainSlider: FC = () => {
  const [items, setItems] = useState<IMainSliderResponse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    HomePageServices.getMainSlider()
      .then(({ data: { Data } }) => {
        setItems(Data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const renderSlide = () => {
    return (
      <Swiper
        spaceBetween={5}
        loop
        slidesPerView={1}
        navigation
        dir="rtl"
        pagination={{ clickable: true }}
        lazy>
        {items.map((item, index) => (
          <SwiperSlide key={`mainSlider${index}`}>
            <Link href={item.DestinationUrl}>
              <a>
                <div
                  className={style.image}
                  style={{ backgroundImage: `url(${item.Picture.Url})` }}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  const renderLoading = () => {
    return <Skeleton className={style.skeleton} />;
  };
  return (
    <div className={style.mainSlider}>
      {loading ? renderLoading() : renderSlide()}
    </div>
  );
};

export default MainSlider;
