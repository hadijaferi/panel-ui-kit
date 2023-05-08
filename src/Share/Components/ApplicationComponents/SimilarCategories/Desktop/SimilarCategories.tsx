import React from "react";
import { SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import SliderItems from "../../../Desktop/SliderItems/SliderItems";
import { LINKS } from "../../../../Constants/LINKS";
import { returnStatus } from "../../../../Helpers/returnStatus";
import { StatusComponent } from "../../../../../infrastructure/Enum/StatusComponent";
import useSimilarCategories from "../Hooks/useSimilarCategories";
import style from "./SimilarCategories.module.sass";

export interface ISimilarCategoriesProps {
  entityId: number;
  title: string;
}

const SimilarCategoriesDesktop = (props: ISimilarCategoriesProps) => {
  const SimilarCategories = useSimilarCategories({
    entityId: props.entityId,
  });
  const renderLoading = () => {
    return <Skeleton height={10} width={60} />;
  };
  const renderSlider = () => {
    return (
      <SliderItems
        config={{
          slidesPerView: "auto",
          navigation: false,
          spaceBetween: 8,
        }}
        Skeleton={renderLoading}
        isLoading={SimilarCategories.isLoading}
        countItem={SimilarCategories.categories.length}>
        {SimilarCategories.categories.map(category => {
          return (
            <SwiperSlide key={`category${category.Id}`}>
              <Link href={LINKS.SERVICE.replace("[id]", String(category.Id))}>
                <div className="chips cursorPointer">{category.Name}</div>
              </Link>
            </SwiperSlide>
          );
        })}
      </SliderItems>
    );
  };

  const renderStatus = () => {
    const status = returnStatus(
      SimilarCategories.isLoading,
      SimilarCategories.categories.length,
    );
    switch (status) {
      case StatusComponent.full:
        return (
          <>
            <div className="fontWeight-700 fontSize-20 m-b-16">
              {props.title}
            </div>
            <div className={style.category}>{renderSlider()}</div>
          </>
        );
      case StatusComponent.loading:
        return (
          <>
            <div className="m-b-64">
              <Skeleton width={200} height={30} className="m-b-8" />
              {renderSlider()}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return renderStatus();
};

export default SimilarCategoriesDesktop;
