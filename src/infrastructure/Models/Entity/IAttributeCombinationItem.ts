import IAttributeValueItem from "./IAttributeValueItem";

export default interface IAttributeCombinationItem {
  Id: number;
  Sku: string;
  StockQuantity: number;
  OldOverriddenPrice: number;
  OverriddenPrice: number;
  PictureId: number;
  ProductAttributeValues: IAttributeValueItem[];
  Type: string;
  DeliveryDateId: number;
  GuarantyId: number;
}
