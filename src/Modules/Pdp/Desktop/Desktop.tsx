import React from "react";
import LazyLoad from "react-lazyload";
import Link from "next/link";
import style from "./Desktop.module.sass";
import { ELEMENTS } from "../../../Share/Constants/Dom/ELEMENTS";
import Icon from "../../../Share/Components/Common/Icon/Icon";
import ScrollTab from "../../../Share/Components/Common/ScrollTab/ScrollTab";
import ProductItemsDesktop from "../../../Share/Components/ApplicationComponents/ProductItems/Desktop/ProductItems";
import { usePdpProductDetails } from "../Hooks/usePdpProductId";
import SimilarCategoriesDesktop from "../../../Share/Components/ApplicationComponents/SimilarCategories/Desktop/SimilarCategories";
import ShortProductBoxDesktop from "./Components/ShortProductBox/ShortProductBoxDesktop";
import PdpDetailDesktop from "./Components/DetailContainer/PdpDetailDesktop";
import OtherSellersDesktop from "../../../Share/Components/ApplicationComponents/OtherSellers/Desktop/OtherSellers";
import SpecificationsDesktop from "../../../Share/Components/ApplicationComponents/Specifications/Desktop/Specifications";
import usePdpSpecifications from "../Hooks/usePdpSpecifications";
import WrapperComment from "../../../Share/Components/ApplicationComponents/WrapperComment/Desktop/WrapperComment";
import pic1 from "../../../Resources/image/Banner/pdp-b-1.jpg";
import pic2 from "../../../Resources/image/Banner/pdp-s-1.jpg";
import pic3 from "../../../Resources/image/Banner/pdp-s-2.jpg";
import pic4 from "../../../Resources/image/Banner/pdp-s-3.jpg";
import Advertisement from "../../../Share/Components/ApplicationComponents/Advertisement/Advertisement";

export default function PdpDesktop() {
  const productDetails = usePdpProductDetails();
  const productId = productDetails?.Product.Id ?? 0;
  const Specifications = usePdpSpecifications();

  let scrollTabItems = [
    { elementId: ELEMENTS.SECTION_COMMENT, title: "نظرات کاربران" },
  ];
  if (Specifications.specifications.length) {
    scrollTabItems = [
      {
        elementId: "pdp-section-specifications",
        title: "مشخصات",
      },
      ...scrollTabItems,
    ];
  }
  return (
    <>
      <div className={style.breadcrumb}>
        <div className="breadcrumb">
          <div className="container">
            <ul>
              {productDetails?.Breadcrumb?.map(breadcrumb => (
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
      <PdpDetailDesktop Pictures={productDetails?.Pictures ?? []} />
      <div className="container" id={ELEMENTS.pdpUnderDetails}>
        <div className="row">
          <div className="col-10 col-xl-9">
            <ProductItemsDesktop
              entity="product"
              productId={productId}
              title="محصولات مشابه"
              type="similar"
            />
            <ScrollTab
              uniqueId={ELEMENTS.SCROLL_TAB_PDP_SDP}
              items={scrollTabItems}>
              <div id="pdp-section-specifications">
                <div>
                  <LazyLoad height={200} once>
                    <SpecificationsDesktop
                      title="مشخصات فنی"
                      specifications={Specifications.specifications}
                    />
                  </LazyLoad>
                  <LazyLoad height={447} offset={200} once>
                    <div className="m-t-64">
                      <ProductItemsDesktop
                        entity="product"
                        productId={productId}
                        title="کالا های پیشنهادی"
                        type="suggests"
                      />
                    </div>
                  </LazyLoad>
                </div>
              </div>
              <div id={ELEMENTS.SECTION_COMMENT}>
                <WrapperComment
                  entityId={productDetails?.Product.Id ?? 0}
                  titleRating="نظر شما"
                />
              </div>
            </ScrollTab>

            <LazyLoad height={447} offset={200} once>
              <ProductItemsDesktop
                entity="product"
                productId={productId}
                title="کالاهایی که ممکن است علاقه داشته باشید "
                type="suggest-secondary"
              />
            </LazyLoad>
            <LazyLoad height={140} offset={200} once>
              <div className="d-flex m-y-24">
                <Advertisement url={pic1} />
              </div>
            </LazyLoad>
            <LazyLoad height={347} offset={200} once>
              <OtherSellersDesktop
                title="سایر فروشندگان هم صنف"
                mieterId={productDetails?.Mieter.Id || 0}
              />
            </LazyLoad>
            <LazyLoad height={447} offset={200} once>
              <div className="m-b-64">
                <SimilarCategoriesDesktop
                  title="دسته بندی های مشابه"
                  entityId={productId}
                />
              </div>
            </LazyLoad>
            <LazyLoad height={140} offset={200} once>
              <div className="d-flex m-y-24">
                <Advertisement url={pic4} />
                <Advertisement url={pic2} />
                <Advertisement url={pic3} />
              </div>
            </LazyLoad>
            <LazyLoad height={447} once offset={200}>
              {/* OtherProducts */}
              <ProductItemsDesktop
                entity="product"
                productId={productId}
                title="دیگر کالاهای این فروشگاه "
                type="mieter-products"
              />
            </LazyLoad>
            <LazyLoad height={447} once offset={200}>
              {/*  BuyOtherCustomer */}
              <ProductItemsDesktop
                entity="product"
                productId={productId}
                title="خریداران این کالا، کالاهای زیر را هم خریده اند"
                type="others-bought"
              />
            </LazyLoad>
          </div>
          <div className="col-2 col-xl-3 p-b-16">
            <ShortProductBoxDesktop />
          </div>
        </div>
      </div>
    </>
  );
}
