import { IGetProductDetailsResponse } from "../../Models/Product/IGetProductDetailsResponse";

export interface IProductModel {
  productDetails: IGetProductDetailsResponse | undefined;
  selectedColorVarietyId: number;
  selectedSizeVarietyId: number;

  selectedProductCountToAdd: number;
}
