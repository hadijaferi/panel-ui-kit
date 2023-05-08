import { ProductActionTypes } from "./types";
import { IGetProductDetailsResponse } from "../../Models/Product/IGetProductDetailsResponse";

export const ProductSetColorVariety = (id: number): ProductActionTypes => ({
  type: "PRODUCT_SET_COLOR_VARIETY",
  payload: {
    id,
  },
});
export const ProductSetSizeVariety = (id: number): ProductActionTypes => ({
  type: "PRODUCT_SET_SIZE_VARIETY",
  payload: {
    id,
  },
});

export const ProductSetSelectedCountToAdd = (
  count: number,
): ProductActionTypes => ({
  type: "PRODUCT_SET_SELECTED_PRODUCT_COUNT",
  payload: {
    count,
  },
});

export const ProductSetDetails = (
  details: IGetProductDetailsResponse,
): ProductActionTypes => ({
  type: "PRODUCT_SET_DETAIL",
  payload: {
    details,
  },
});
