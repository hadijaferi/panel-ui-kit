import { Dispatch } from "redux";
import ShoppingCart from "../../Services/ShoppingCart";
import IShoppingCartChangeItem from "../../Models/ShoppingCart/Entity/IShoppingCartChangeItem";
import { CART_ACTIONS, ICartActions } from "./types";
import IShoppingCartQuantityRequest from "../../Models/ShoppingCart/IShoppingCartQuantityRequest";

export const CartLoadItems = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: CART_ACTIONS.TOGGLE_ITEMS_LOADING,
      payload: true,
    });
    return ShoppingCart.getItems().then(async res => {
      if (res.data.IsSuccess) {
        await dispatch({
          type: CART_ACTIONS.SET_ITEMS,
          payload: res.data.Data.ShoppingCarts,
        });
        await dispatch({
          type: CART_ACTIONS.TOGGLE_ITEMS_LOADING,
          payload: false,
        });
      }
      return Promise.resolve(res.data);
    });
  };
};
export const CartLoadSummary = () => {
  return (dispatch: Dispatch<ICartActions>) => {
    dispatch({
      type: CART_ACTIONS.TOGGLE_SUMMARY_LOADING,
      payload: true,
    });
    ShoppingCart.getOrderSummary().then(res => {
      if (res.data.IsSuccess) {
        dispatch({
          type: CART_ACTIONS.CHANGE_ORDER_SUMMARY,
          payload: res.data.Data,
        });
        dispatch({
          type: CART_ACTIONS.TOGGLE_SUMMARY_LOADING,
          payload: false,
        });
      }
      return res;
    });
  };
};

export const CartChangeItemQuantity = (body: IShoppingCartQuantityRequest) => {
  return (dispatch: Dispatch<any>) => {
    return ShoppingCart.changeQuantity(body).then(async res => {
      if (res.data.IsSuccess) {
        await dispatch(CartLoadItems());
        await dispatch(CartLoadSummary());
      }
      return res;
    });
  };
};

export const CartDeleteItem = (Id: number) => {
  return (dispatch: Dispatch<any>) => {
    return ShoppingCart.deleteItem({
      Id,
    }).then(async res => {
      if (res.data.IsSuccess) {
        await dispatch(CartLoadItems());
        await dispatch(CartLoadSummary());
      }
      return res;
    });
  };
};

export const CartAddItem = (item: IShoppingCartChangeItem) => {
  return (dispatch: Dispatch<any>) => {
    return ShoppingCart.addItem({
      ProductId: item.ProductId,
      Quantity: item.Quantity,
      CombinationId: item.CombinationId,
    }).then(async res => {
      if (res.data.IsSuccess) {
        await dispatch(CartLoadItems());
        await dispatch(CartLoadSummary());
      }
      return res;
    });
  };
};

export const CartUpdateDeletingItems = (items: number[]): ICartActions => ({
  type: CART_ACTIONS.UPDATE_DELETING_ITEMS,
  payload: items,
});

export const CartUpdateChangingQuantityItems = (
  items: number[],
): ICartActions => ({
  type: CART_ACTIONS.UPDATE_QUANTITY_ITEMS,
  payload: items,
});

export const CartToggleDeleteItemModal = (
  isOpen: boolean | undefined,
  id: number | undefined,
): ICartActions => ({
  type: CART_ACTIONS.TOGGLE_DELETE_CONFIRM_MODAL,
  payload: {
    id,
    isOpen,
  },
});
