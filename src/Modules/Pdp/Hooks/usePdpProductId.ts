import { useSelector } from "react-redux";
import { IRootState } from "../../../Share/Store/Reducer";
import { IGetProductDetailsResponse } from "../../../Share/Models/Product/IGetProductDetailsResponse";

export const usePdpProductDetails = ():
  | IGetProductDetailsResponse
  | undefined => {
  return useSelector((state: IRootState) => state.product.productDetails);
};
