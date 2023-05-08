import IShoppingCarts from "../../Models/ShoppingCart/Entity/IShoppingCarts";
import IShoppingCartOrderSummaryResponse from "../../Models/ShoppingCart/IShoppingCartOrderSummaryResponse";

export interface ICartModel {
  ShoppingCarts: IShoppingCarts[];
  updatingItemsQuantity: number[];
  deletingCartItems: number[];
  isLoadingShoppingCarts: boolean;
  OrderSummary: IShoppingCartOrderSummaryResponse | null;
  isLoadingOrderSummary: boolean;
  deleteItemConfirmModalIsOpen: boolean;
  deleteItemConfirmId: number;
}
