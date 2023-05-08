import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import { ELEMENTS } from "../../../Share/Constants/Dom/ELEMENTS";
import OtherSellersDesktop from "../../../Share/Components/ApplicationComponents/OtherSellers/Desktop/OtherSellers";
import DetailDesktop from "./Components/Detail/Detail";
import ProductItemsDesktop from "../../../Share/Components/ApplicationComponents/ProductItems/Desktop/ProductItems";
import ScrollTab from "../../../Share/Components/Common/ScrollTab/ScrollTab";
import useGetMieter from "../Hooks/Detail/GetMieter";
import useGetService from "../Hooks/Detail/GetService";
import ShortServiceBoxDesktop from "./Components/ShortServiceBox/ShortServiceBox";
import style from "./SdpDesktop.module.sass";
import Icon from "../../../Share/Components/Common/Icon/Icon";
import useBreadcrumb from "../Hooks/useBreadcrumb";
import SimilarCategoriesDesktop from "../../../Share/Components/ApplicationComponents/SimilarCategories/Desktop/SimilarCategories";
import SpecificationsDesktop from "../../../Share/Components/ApplicationComponents/Specifications/Desktop/Specifications";
import useSpecifications from "../Hooks/Specifications";
import WrapperComment from "../../../Share/Components/ApplicationComponents/WrapperComment/Desktop/WrapperComment";
import Advertisement from "../../../Share/Components/ApplicationComponents/Advertisement/Advertisement";
import pic1 from "../../../Resources/image/Banner/home-b-2.jpg";
import pic2 from "../../../Resources/image/Banner/pdp-m-1.jpg";
import pic3 from "../../../Resources/image/Banner/pdp-m-2.jpg";

const SdpDesktop = () => {
  const Mieter = useGetMieter();
  const Service = useGetService();
  const Specifications = useSpecifications();
  const { Breadcrumb } = useBreadcrumb();
  let scrollTabItems = [
    { elementId: ELEMENTS.SECTION_COMMENT, title: "نظرات کاربران" },
  ];
  if (Specifications.specifications.length) {
    scrollTabItems = [
      { elementId: "sdp-section-specifications", title: "مشخصات" },
      ...scrollTabItems,
    ];
  }

  return (
    <>
      <div className={style.breadcrumb}>
        <div className="breadcrumb">
          <div className="container">
            <ul>
              {Breadcrumb?.map(breadcrumb => (
                <li key={`breadcrumb${breadcrumb.Id}`}>
                  <Link href={`/search/${breadcrumb.Id}`}>
                    <a>
                      <span>{breadcrumb.Name}</span>
                      <Icon name="left" />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <DetailDesktop />
      <div className="container" id={ELEMENTS.SDP_UNDER_DETAILS}>
        <div className="row">
          <div className="col-10 col-xl-9">
            <ProductItemsDesktop
              productId={Service?.service?.Id}
              entity="service"
              type="similar"
              title="خدمات مشابه"
            />
            <ScrollTab
              uniqueId={ELEMENTS.SCROLL_TAB_PDP_SDP}
              items={scrollTabItems}>
              <div id="sdp-section-specifications">
                <SpecificationsDesktop
                  specifications={Specifications?.specifications}
                  title="مشخصات فنی"
                />
                <ProductItemsDesktop
                  productId={Service?.service?.Id}
                  entity="service"
                  type="suggests"
                  title="خدمات پیشنهادی"
                />
              </div>
              <LazyLoad height={140} offset={200} once>
                <div className="d-flex m-y-24">
                  <Advertisement url={pic1} />
                </div>
              </LazyLoad>
              <div id={ELEMENTS.SECTION_COMMENT}>
                <WrapperComment
                  entityId={Service?.service?.Id}
                  titleRating={Service?.service?.Name}
                />
              </div>
            </ScrollTab>

            <ProductItemsDesktop
              productId={Service?.service?.Id}
              entity="service"
              type="suggest-secondary"
              title="خدماتی که ممکن است علاقه داشته باشید"
            />
            <LazyLoad height={140} offset={200} once>
              <div className="d-flex m-y-24">
                <Advertisement url={pic2} />
                <Advertisement url={pic3} />
              </div>
            </LazyLoad>
            <OtherSellersDesktop
              title="سایر واحد های تجاری هم صنف"
              mieterId={Mieter.Id}
            />

            <SimilarCategoriesDesktop
              title="دسته بندی های مشابه"
              entityId={Service?.service?.Id}
            />
            <ProductItemsDesktop
              productId={Service?.service?.Id}
              entity="service"
              type="mieter-products"
              title="دیگر خدمات این واحد تجاری"
            />
          </div>
          <div className="col-2 col-xl-3 p-b-16">
            <ShortServiceBoxDesktop />
          </div>
        </div>
      </div>
    </>
  );
};

export default SdpDesktop;
