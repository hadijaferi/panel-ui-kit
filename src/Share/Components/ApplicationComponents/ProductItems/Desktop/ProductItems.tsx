import React from "react";
import useProductItems from "../Hooks/useProductItems";
import ListSectionDesktop from "../../../ListSection/Desktop/ListSectionDesktop";

export interface IProductItemsProps {
  productId: number;
  title: string;
  entity: "product" | "service";
  type:
    | "suggest-secondary"
    | "suggests"
    | "mieter-products"
    | "similar"
    | "others-bought";
}

const ProductItemsDesktop = (props: IProductItemsProps) => {
  const ProductItems = useProductItems({
    productId: props.productId,
    type: props.type,
  });
  // also handle loading
  const renderSlider = () => {
    return (
      <div className="m-b-32">
        <ListSectionDesktop
          Type={props.entity}
          Items={ProductItems.productItems}
          Name={props.title}
          Loading={ProductItems.isLoading}
          ConfigSwiper={{
            navigation: false,
            slidesPerView: 5,
            spaceBetween: 16,
            breakpoints: {
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1440: {
                slidesPerView: 5,
              },
            },
          }}
        />
      </div>
    );
  };

  return renderSlider();
};

export default ProductItemsDesktop;
