import { CART_ACTIONS, ICartActions } from "./types";
import { ICartModel } from "./models";

const initialStates: ICartModel = {
  ShoppingCarts: [],
  deletingCartItems: [],
  updatingItemsQuantity: [],
  isLoadingShoppingCarts: false,
  isLoadingOrderSummary: false,
  OrderSummary: {
    CouponCode: "",
    OrderTotal: 0,
    OrderTotalDiscount: 0,
    Shipping: 0,
    SubTotal: 0,
    SubTotalDiscount: 0,
  },
  deleteItemConfirmId: -1,
  deleteItemConfirmModalIsOpen: false,
};

export const CartReducer = (
  state = initialStates,
  action: ICartActions,
): ICartModel => {
  switch (action.type) {
    case CART_ACTIONS.TOGGLE_ITEMS_LOADING:
      return {
        ...state,
        isLoadingShoppingCarts: action.payload,
      };
    case CART_ACTIONS.TOGGLE_SUMMARY_LOADING:
      return {
        ...state,
        isLoadingOrderSummary: action.payload,
      };
    case CART_ACTIONS.UPDATE_QUANTITY_ITEMS:
      return {
        ...state,
        updatingItemsQuantity: action.payload,
      };
    case CART_ACTIONS.UPDATE_DELETING_ITEMS:
      return {
        ...state,
        deletingCartItems: action.payload,
      };

    case CART_ACTIONS.CHANGE_ORDER_SUMMARY:
      return {
        ...state,
        OrderSummary: action.payload,
      };
    case CART_ACTIONS.SET_ITEMS:
      return {
        ...state,
        ShoppingCarts: action.payload,
      };
    case CART_ACTIONS.TOGGLE_DELETE_CONFIRM_MODAL:
      return {
        ...state,
        deleteItemConfirmModalIsOpen:
          action.payload.isOpen ?? state.deleteItemConfirmModalIsOpen,
        deleteItemConfirmId: action.payload.id ?? state.deleteItemConfirmId,
      };

    default:
      return state;
  }
};
