import { ProductActionTypes } from "./types";
import { IProductModel } from "./models";

const initialStates: IProductModel = {
  productDetails: undefined,
  selectedColorVarietyId: -1,
  selectedProductCountToAdd: 1,
  selectedSizeVarietyId: -1,
};

export const ProductReducer = (
  state = initialStates,
  action: ProductActionTypes,
): IProductModel => {
  switch (action.type) {
    case "PRODUCT_SET_DETAIL":
      return {
        ...state,
        productDetails: action.payload.details,
      };
    case "PRODUCT_SET_COLOR_VARIETY":
      return {
        ...state,
        selectedColorVarietyId: action.payload.id,
      };
    case "PRODUCT_SET_SIZE_VARIETY":
      return {
        ...state,
        selectedSizeVarietyId: action.payload.id,
      };
    case "PRODUCT_SET_SELECTED_PRODUCT_COUNT":
      return {
        ...state,
        selectedProductCountToAdd: action.payload.count,
      };
    default:
      return state;
  }
};
