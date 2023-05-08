import IShoppingCartItem from "../../Models/ShoppingCart/Entity/IShoppingCartItem";
import IShoppingCarts from "../../Models/ShoppingCart/Entity/IShoppingCarts";
import IShoppingCartOrderSummaryResponse from "../../Models/ShoppingCart/IShoppingCartOrderSummaryResponse";
import IShoppingCartAddItemRequest from "../../Models/ShoppingCart/IShoppingCartAddItemRequest";

export enum CART_ACTIONS {
  CHANGE_ITEM_QUANTITY = "CHANGE_ITEM_QUANTITY",
  ADD_ITEM = "ADD_ITEM",
  SET_ITEMS = "SET_ITEMS",
  CHANGE_ORDER_SUMMARY = "CHANGE_ORDER_SUMMARY",
  TOGGLE_ITEMS_LOADING = "TOGGLE_ITEMS_LOADING",
  TOGGLE_SUMMARY_LOADING = "TOGGLE_SUMMARY_LOADING",
  UPDATE_DELETING_ITEMS = "UPDATE_DELETING_ITEMS",
  UPDATE_QUANTITY_ITEMS = "UPDATE_QUANTITY_ITEMS",
  TOGGLE_DELETE_CONFIRM_MODAL = "TOGGLE_DELETE_CONFIRM_MODAL",
}

interface CartUpdateQuantityItemsAction {
  type: CART_ACTIONS.UPDATE_QUANTITY_ITEMS;
  payload: number[];
}

interface CartUpdateDeletingItemsAction {
  type: CART_ACTIONS.UPDATE_DELETING_ITEMS;
  payload: number[];
}

interface CartAddItemAction {
  type: CART_ACTIONS.ADD_ITEM;
  payload: IShoppingCartAddItemRequest;
}

interface CartToggleItemsLoadingAction {
  type: CART_ACTIONS.TOGGLE_ITEMS_LOADING;
  payload: boolean;
}

interface CartToggleSummaryLoadingAction {
  type: CART_ACTIONS.TOGGLE_SUMMARY_LOADING;
  payload: boolean;
}

interface CartChangeItemQuantityAction {
  type: CART_ACTIONS.CHANGE_ITEM_QUANTITY;
  payload: IShoppingCartItem;
}

interface SetCartItemsAction {
  type: CART_ACTIONS.SET_ITEMS;
  payload: IShoppingCarts[];
}

interface CartChangeOrderSummaryAction {
  type: CART_ACTIONS.CHANGE_ORDER_SUMMARY;
  payload: IShoppingCartOrderSummaryResponse;
}

interface CartToggleDeleteConfirmModalAction {
  type: CART_ACTIONS.TOGGLE_DELETE_CONFIRM_MODAL;
  payload: {
    isOpen: boolean | undefined;
    id: number | undefined;
  };
}
export type ICartActions =
  | CartChangeItemQuantityAction
  | SetCartItemsAction
  | CartChangeOrderSummaryAction
  | CartAddItemAction
  | CartToggleItemsLoadingAction
  | CartToggleSummaryLoadingAction
  | CartUpdateDeletingItemsAction
  | CartUpdateQuantityItemsAction
  | CartToggleDeleteConfirmModalAction;
