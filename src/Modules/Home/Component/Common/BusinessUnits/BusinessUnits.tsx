import React from "react";
import { SwiperSlide } from "swiper/react";
import style from "./BusinessUnits.module.sass";
import businessUnitsImage from "../../../../../Resources/image/businessUnitsImage.svg";
import ServiceBoxSkeleton from "../../../../../Share/Components/Common/ServiceBox/Skeleton";
import StoreBox from "../../../../../Share/Components/Common/StoreBox/StoreBox";
import { LINKS } from "../../../../../Share/Constants/LINKS";
import { IMieter } from "../../../../../infrastructure/Models/Entity/IMieter";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import ButtonLink from "../../../../../Share/Components/Common/Button/ButtonLink";
import SliderItemsDesktop from "../../../../../Share/Components/Desktop/SliderItems/SliderItems";

interface IBusinessUnitsProps {
  items?: IMieter[];
  remove?: boolean;
}
const BusinessUnits = ({ items, remove }: IBusinessUnitsProps) => {
  return (
    <div className={style.businessUnits}>
      <div className={style.col}>
        <img
          className={style.image}
          src={businessUnitsImage}
          alt="businessUnitsImage"
        />
      </div>
      {!remove && (
        <div className={style.col}>
          <div className="fontWeight-700 fontSize-20 m-b-16">
            واحد های تجاری
          </div>
          <SliderItemsDesktop
            countItem={3}
            config={{
              spaceBetween: 20,
              slidesPerView: 3,
            }}
            Skeleton={ServiceBoxSkeleton}
            isLoading={false}>
            {items?.map((unit: IMieter) => (
              <SwiperSlide>
                <StoreBox
                  store={unit}
                  link={{
                    href: LINKS.SERVICE,
                    as: LINKS.SERVICE.replace("[id]", String(unit.Id)),
                  }}
                />
              </SwiperSlide>
            ))}
          </SliderItemsDesktop>
        </div>
      )}
      <div className="col-12 m-t-16">
        <div className={style.haveOnlineShop}>
          <div className="col-6">
            <div className={style.whiteSpace} />
          </div>
          <div className={generateClassName(["col-6", style.left])}>
            <div className="col-10">
              <div className={style.title}>
                شما هم صاحب <span>واحد تجاری آنلاین</span> خود شوید
              </div>
              <p>
                آدرس کلیک تنها پاساژ اینترنتی می باشد که در قبال فروش محصولات و
                خدمات خودتان در این پاساژ از شما پورسانتی دریافت نمی کند.
              </p>
            </div>
            <ButtonLink className={style.btn} href="#">
              <Icon name="angle-left" size="large" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessUnits;
