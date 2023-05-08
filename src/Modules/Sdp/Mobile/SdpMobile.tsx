import React from "react";
import { SwiperSlide } from "swiper/react";
import ProductItemsMobile from "../../../Share/Components/ApplicationComponents/ProductItems/Mobile/ProductItems";
import ImageSliderMobile from "../../../Share/Components/Mobile/ImageSlider/ImageSlider";
import useGetPictures from "../Hooks/Detail/GetPictures";
import ServiceInfoMobile from "./Components/ServiceInfo/ServiceInfo";
import MieterInfoMobile from "./Components/MieterInfo/MieterInfo";
import WorkTimeMobile from "./Components/WorkTime/WorkTime";
import SimilarCategoriesMobile from "../../../Share/Components/ApplicationComponents/SimilarCategories/Mobile/SimilarCategories";
import useGetService from "../Hooks/Detail/GetService";
import SpecificationsMobile from "../../../Share/Components/ApplicationComponents/Specifications/Mobile/Specifications";
import useSpecifications from "../Hooks/Specifications";
import WrapperComment from "../../../Share/Components/ApplicationComponents/WrapperComment/Mobile/WrapperComment";
import Advertisement from "../../../Share/Components/ApplicationComponents/Advertisement/Advertisement";
import pic1 from "../../../Resources/image/Banner/home-s-1.jpg";
import pic3 from "../../../Resources/image/Banner/home-s-3.jpg";
import pic2 from "../../../Resources/image/Banner/home-s-2.jpg";
import SliderItems from "../../../Share/Components/Mobile/SliderItems/SliderItems";

const SdpMobile = () => {
  const GetPictures = useGetPictures();
  const Service = useGetService();
  const Specifications = useSpecifications();
  return (
    <>
      <ImageSliderMobile images={GetPictures?.pictures} imageSize={330} />
      <ServiceInfoMobile />
      <WorkTimeMobile />
      <div className="m-b-16">
        <MieterInfoMobile />
      </div>
      <SpecificationsMobile
        title="مشخصات فنی"
        specifications={Specifications?.specifications}
      />
      <div className="m-b-32">
        <ProductItemsMobile
          entity="service"
          productId={Service?.service?.Id}
          type="similar"
          title="خدمات مشابه"
        />
      </div>
      <div className="m-b-32">
        <ProductItemsMobile
          entity="service"
          productId={Service?.service?.Id}
          type="suggests"
          title="خدمات پیشنهادی"
        />
      </div>
      <SliderItems
        config={{
          spaceBetween: 8,
          slidesPerView: 1.2,
        }}
        countItem={3}
        isLoading={false}>
        <SwiperSlide>
          <Advertisement url={pic1} />
        </SwiperSlide>
        <SwiperSlide>
          <Advertisement url={pic3} />
        </SwiperSlide>
        <SwiperSlide>
          <Advertisement url={pic2} />
        </SwiperSlide>
      </SliderItems>
      <div className="m-b-32">
        <ProductItemsMobile
          entity="service"
          productId={Service?.service?.Id}
          type="suggest-secondary"
          title="خدمات که ممکن است علاقه داشته باشید"
        />
      </div>

      <div className="m-b-32">
        <SimilarCategoriesMobile
          entityId={Service?.service?.Id}
          title="دسته بندی های مشابه"
        />
      </div>
      <SliderItems
        config={{
          spaceBetween: 8,
          slidesPerView: 1.2,
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
      <div className="m-b-32">
        <ProductItemsMobile
          entity="service"
          productId={Service?.service?.Id}
          type="mieter-products"
          title="دیگر خدمات این واحد تجاری"
        />
      </div>

      <div className="m-b-32">
        <WrapperComment
          entityId={Service?.service?.Id ?? 0}
          titleRating={Service?.service?.Name ?? ""}
        />
        {/* <CommentsMobile EntityId={productInfo?.Product.Id ?? 0} /> */}
      </div>
    </>
  );
};
export default SdpMobile;
