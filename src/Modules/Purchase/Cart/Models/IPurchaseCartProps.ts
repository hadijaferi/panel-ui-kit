import IShoppingCarts from "../../../../Share/Models/ShoppingCart/Entity/IShoppingCarts";
import { CartUpdateChangingQuantityItems } from "../../../../Share/Store/Cart/actions";

export default interface IPurchaseCartProps {
  shoppingCarts: IShoppingCarts[];
  isLoadingCartItems: boolean;
  updatingItemsQuantity: number[];
  deletingCartItems: number[];
  updateItemQuantity: (id: number, productId: number, count: number) => void;
  CartUpdateChangingQuantityItems: typeof CartUpdateChangingQuantityItems;
  isLoadingItemQuantity: (id: number) => boolean;
  isLoadingItemDeleting: (id: number) => boolean;
  CartUpdateDeletingItems: (ids: number[]) => void;
  deleteItem: (cartItemId: number) => void;
}
