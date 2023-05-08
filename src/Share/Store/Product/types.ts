import { IGetProductDetailsResponse } from "../../Models/Product/IGetProductDetailsResponse";

export const PRODUCT_SET_COLOR_VARIETY = "PRODUCT_SET_COLOR_VARIETY";
export const PRODUCT_SET_SIZE_VARIETY = "PRODUCT_SET_SIZE_VARIETY";

export const PRODUCT_SET_SELECTED_PRODUCT_COUNT =
  "PRODUCT_SET_SELECTED_PRODUCT_COUNT";
export const PRODUCT_SET_DETAIL = "PRODUCT_SET_DETAIL";

interface SetProductColorVariety {
  type: typeof PRODUCT_SET_COLOR_VARIETY;
  payload: {
    id: number;
  };
}
interface SetProductSizeVariety {
  type: typeof PRODUCT_SET_SIZE_VARIETY;
  payload: {
    id: number;
  };
}

interface SetSelectedProductCount {
  type: typeof PRODUCT_SET_SELECTED_PRODUCT_COUNT;
  payload: {
    count: number;
  };
}

interface SetProductDetails {
  type: typeof PRODUCT_SET_DETAIL;
  payload: {
    details: IGetProductDetailsResponse;
  };
}

export type ProductActionTypes =
  | SetProductColorVariety
  | SetProductSizeVariety
  | SetSelectedProductCount
  | SetProductDetails;
