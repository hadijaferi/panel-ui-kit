import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

export default class Index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className="swiper_container">
              <Swiper spaceBetween={30} slidesPerView={5} navigation>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
                <SwiperSlide>{/* <ProductBoxDesktop /> */}</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
