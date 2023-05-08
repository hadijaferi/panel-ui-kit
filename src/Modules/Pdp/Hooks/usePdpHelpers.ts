import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../Share/Store/Reducer";
import ProductHelpers from "../Helpers/productHelpers";
import {
  ProductSetColorVariety,
  ProductSetSelectedCountToAdd,
  ProductSetSizeVariety,
} from "../../../Share/Store/Product/actions";

export default function usePdpHelpers() {
  const dispatch = useDispatch();
  const productDetails = useSelector(
    (state: IRootState) => state.product.productDetails,
  );
  const selectedSizeVarietyId = useSelector(
    (state: IRootState) => state.product.selectedSizeVarietyId,
  );
  const selectedColorVarietyId = useSelector(
    (state: IRootState) => state.product.selectedColorVarietyId,
  );

  const helpers = new ProductHelpers(productDetails as any);
  if (helpers.selectedColorVarietyId !== selectedColorVarietyId) {
    helpers.selectedColorVarietyId = selectedColorVarietyId;
  }
  if (helpers.selectedSizeVarietyId !== selectedSizeVarietyId) {
    helpers.selectedSizeVarietyId = selectedSizeVarietyId;
  }
  const resetSelectedStockQuantity = (newId: number) => {
    if (helpers.getCurrentCombination()?.Id !== newId) {
      dispatch(ProductSetSelectedCountToAdd(1));
    }
  };
  const getProductLink = (): string => {
    return `https://addressclick.com/product/${productDetails?.Product.Id}`;
  };

  const setSelectedColorVarietyId = (id: number) => {
    resetSelectedStockQuantity(id);
    dispatch(ProductSetColorVariety(id));
  };
  const setSelectedSizeVarietyId = (id: number) => {
    resetSelectedStockQuantity(id);
    dispatch(ProductSetSizeVariety(id));
  };

  return {
    ...helpers,
    setSelectedColorVarietyId,
    setSelectedSizeVarietyId,
    getProductLink,
  };
}
