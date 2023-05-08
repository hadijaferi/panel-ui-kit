import IShoppingCartItem from "./IShoppingCartItem";
import IShoppingMieter from "./IShoppingMieter";

export default interface IShoppingCarts {
  Mieter: IShoppingMieter;
  Items: IShoppingCartItem[];
  SubTotal: number;
}
