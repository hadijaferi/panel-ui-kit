import React from "react";
import useEntityItems from "../Hooks/useProductItems";
import ListSectionMobile from "../../../ListSection/Mobile/ListSectionMobile";

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

const ProductItemsMobile = (props: IProductItemsProps) => {
  const ProductItems = useEntityItems({
    productId: props.productId,
    type: props.type,
  });
  // also handle loading

  const renderSlider = () => {
    return (
      <ListSectionMobile
        Name={props.title}
        Items={ProductItems.productItems}
        Type={props.entity}
        Loading={ProductItems.isLoading}
      />
    );
  };

  return renderSlider();
};

export default ProductItemsMobile;
