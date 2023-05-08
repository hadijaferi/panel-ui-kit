import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
import { IVitrinProductElementsTypes } from "../Models/IVitrinProductElementsTypes";
import { IVitrinServiceElementsTypes } from "../Models/IVitrinServiceElementsTypes";
import useGetShop from "../Hooks/useGetShop";
import ElementLoader from "../Components/ElementLoader/ElementLoader";

const items: Record<number, any> = {
  // products
  [IVitrinProductElementsTypes.Banner]: dynamic(
    () => import("../Components/VitrinBanner/VitrinBanner"),
  ),
  [IVitrinServiceElementsTypes.Gallery]: dynamic(
    () => import("../Service/Components/GalleryCard/GalleryCard"),
  ),
  [IVitrinServiceElementsTypes.TextAndPhoto]: dynamic(
    () => import("../Service/Components/SellerPresent/SellerPresent"),
  ),
  // service list
  [IVitrinServiceElementsTypes.Service]: dynamic(
    () => import("../Components/VitrinItemListWrapper/Container"),
  ),
  // product list
  [IVitrinProductElementsTypes.Product]: dynamic(
    () => import("../Components/VitrinItemListWrapper/Container"),
  ),

  [IVitrinProductElementsTypes.Comment]: dynamic(
    () => import("../Components/CommentWrapper/CommentWrapper"),
  ),

  [IVitrinServiceElementsTypes.Text]: dynamic(
    () => import("../Components/TextSection/TextSection"),
  ),
};
export const GenerateVitrinPageItems = (): ReactNode => {
  const useShop = useGetShop();
  const vitrinItems = useShop.vitrinBase?.VitrinElements ?? [];

  return vitrinItems.map((item, index) => {
    const Comp = items[item.VitrinElementTypeId];
    if (Comp) {
      return (
        <LazyLoad key={item.VitrinElementId} offset={50} height={150}>
          <ElementLoader
            index={index}
            Comp={Comp}
            vitrinType={useShop.vitrinType}
            {...item}
          />
        </LazyLoad>
      );
    }
    return null;
  });
};
