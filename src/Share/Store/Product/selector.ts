import { createSelector } from "reselect";
import { IRootState } from "../Reducer";
import ProductHelpers from "../../../Modules/Pdp/Helpers/productHelpers";

export const selectedProductCountToAdd = (state: IRootState) =>
  state.product.selectedProductCountToAdd;

const getSelectedColorVarietyId = (state: IRootState) =>
  state.product.selectedColorVarietyId;

const getSelectedSizeVarietyId = (state: IRootState) =>
  state.product.selectedSizeVarietyId;

const getProductDetails = (state: IRootState) => state.product.productDetails;

export const addProductToCartSelector = (state: IRootState) => {
  return {
    selectedProductCountToAdd: state.product.selectedProductCountToAdd,
  };
};

export const getFullPriceSelector = createSelector(
  [getSelectedColorVarietyId, getSelectedSizeVarietyId, getProductDetails],
  (colorId, sizeId, productDetails) => {
    // compute price
    if (productDetails) {
      const helper: ProductHelpers = new ProductHelpers(productDetails);
      helper.selectedColorVarietyId = colorId;
      helper.selectedSizeVarietyId = sizeId;
      return helper.getProductFullPrice();
    }
  },
);
export const getCombinationTypeName = createSelector(
  [getProductDetails],
  productDetails => {
    if (productDetails) {
      const helper: ProductHelpers = new ProductHelpers(productDetails);
      return helper.getCombinationType() === "color" ? "رنگ" : "سایز";
    }
    return "";
  },
);
export const hasCombination = createSelector(
  [getProductDetails],
  productDetails => {
    if (productDetails) {
      const helper: ProductHelpers = new ProductHelpers(productDetails);
      return helper.hasCombination();
    }
    return 0;
  },
);

export const getCombinationName = createSelector(
  [getSelectedColorVarietyId, getSelectedSizeVarietyId, getProductDetails],
  (colorId, sizeId, productDetails) => {
    if (productDetails) {
      const helper: ProductHelpers = new ProductHelpers(productDetails);
      helper.selectedColorVarietyId = colorId;
      helper.selectedSizeVarietyId = sizeId;
      return helper.getSelectedCombinationName();
    }
    return "";
  },
);
