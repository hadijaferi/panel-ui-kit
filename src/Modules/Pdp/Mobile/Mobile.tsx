import React, { FC } from "react";
import { SwiperSlide } from "swiper/react";
import PdpDetailMobile from "./Components/Detail/Detail";
import { usePdpProductDetails } from "../Hooks/usePdpProductId";
import ProductItemsMobile from "../../../Share/Components/ApplicationComponents/ProductItems/Mobile/ProductItems";
import SimilarCategoriesMobile from "../../../Share/Components/ApplicationComponents/SimilarCategories/Mobile/SimilarCategories";
import SpecificationsMobile from "../../../Share/Components/ApplicationComponents/Specifications/Mobile/Specifications";
import usePdpSpecifications from "../Hooks/usePdpSpecifications";
import Page from "../../../Share/Components/Mobile/Page/Page";
import Toolbar from "../../../Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarTitle from "../../../Share/Components/Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarMenu from "../../../Share/Components/Mobile/Toolbar/Components/ToolbarMenu/ToolbarMenu";
import BottomSheet from "./Components/BottomSheet/BottomSheet";
import { ToolbarBack } from "../../../Share/Components/Mobile/Toolbar/Components/ToolbarBack/ToolbarBack";
import Button from "../../../Share/Components/Common/Button/Button";
import Icon from "../../../Share/Components/Common/Icon/Icon";
import ButtonLink from "../../../Share/Components/Common/Button/ButtonLink";
import { LINKS } from "../../../Share/Constants/LINKS";
import WrapperComment from "../../../Share/Components/ApplicationComponents/WrapperComment/Mobile/WrapperComment";
import SliderItems from "../../../Share/Components/Mobile/SliderItems/SliderItems";
import Advertisement from "../../../Share/Components/ApplicationComponents/Advertisement/Advertisement";
import pic3 from "../../../Resources/image/Banner/home-s-3.jpg";
import pic1 from "../../../Resources/image/Banner/home-s-1.jpg";
import pic2 from "../../../Resources/image/Banner/home-s-2.jpg";

const PdpMobileWrapper: FC = props => {
  return (
    <Page
      bottomNavigation={() => <BottomSheet />}
      toolbar={() => {
        return (
          <Toolbar>
            <ToolbarBack>
              <Button theme="iconic">
                <Icon name="arrow-right" size="large" />
              </Button>
            </ToolbarBack>
            <ToolbarTitle />
            <ToolbarMenu>
              <ButtonLink theme="iconic" href={LINKS.CART}>
                <Icon name="shopping-bag" size="large" />
              </ButtonLink>
            </ToolbarMenu>
          </Toolbar>
        );
      }}>
      {props.children}
    </Page>
  );
};

export default function PdpMobile() {
  const productInfo = usePdpProductDetails();
  const Specifications = usePdpSpecifications();
  return (
    <PdpMobileWrapper>
      <div className="m-b-32">
        <div className="m-b-32">
          <PdpDetailMobile />
          <div className="m-b-32">
            <SpecificationsMobile
              title="مشخصات فنی"
              specifications={Specifications.specifications}
            />
          </div>
        </div>
        <div className="m-b-32">
          <ProductItemsMobile
            entity="product"
            productId={productInfo?.Product.Id || 0}
            title="محصولات مشابه"
            type="similar"
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
            entity="product"
            productId={productInfo?.Product.Id || 0}
            title="محصولات پیشنهادی"
            type="suggests"
          />
        </div>
        <div className="m-b-32">
          <WrapperComment
            entityId={productInfo?.Product.Id ?? 0}
            titleRating={productInfo?.Product.Name ?? ""}
          />
          {/* <CommentsMobile EntityId={productInfo?.Product.Id ?? 0} /> */}
        </div>
        <div className="m-b-32">
          <ProductItemsMobile
            entity="product"
            productId={productInfo?.Product.Id || 0}
            title="کالا هایی که ممکن است علاقه داشته باشید"
            type="suggest-secondary"
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
          <SimilarCategoriesMobile
            entityId={productInfo?.Product.Id || 0}
            title="دسته بندی های مشابه"
          />
        </div>
        <div className="m-b-32">
          <ProductItemsMobile
            entity="product"
            productId={productInfo?.Product.Id || 0}
            title="دیگر محصولات این فروشگاه"
            type="mieter-products"
          />
        </div>
        <ProductItemsMobile
          entity="product"
          productId={productInfo?.Product.Id || 0}
          title="خریداران کالاهای زیر را هم خریده اند"
          type="mieter-products"
        />
      </div>
    </PdpMobileWrapper>
  );
}
