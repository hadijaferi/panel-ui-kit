import IShoppingProduct from "./IShoppingProduct";
import IShoppingMieter from "./IShoppingMieter";

export default interface IShoppingCartItem {
  Mieter: IShoppingMieter;
  Id: number;
  Product: IShoppingProduct;
  Attribute: 0;
  Quantity: number;
  Warnings: string[];
}
