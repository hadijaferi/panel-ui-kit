import IShoppingCartItem from "./IShoppingCartItem";
import IShoppingCartShippingOptionItem from "./IShoppingCartShippingOptionItem";

export default interface IShoppingCartShipmentPackageItem {
  Id: string,
  ShoppingCartItems: IShoppingCartItem[]
  ShippingOptions: IShoppingCartShippingOptionItem[]
  SelectedShippingOptionName: string
  TotalCost: number
}
