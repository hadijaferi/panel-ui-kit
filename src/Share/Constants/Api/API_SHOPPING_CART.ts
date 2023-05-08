import { API_BASE } from "./API";

export default {
  COUNT: `${API_BASE}customer/shopping-cart/count`,
  ITEMS: `${API_BASE}customer/shopping-cart`,
  ORDER_SUMMARY: `${API_BASE}customer/shopping-cart/order-summary`,
  SHIPPING_ADDRESS: `${API_BASE}customer/shopping-cart/shopping-address`,
  SHIPPING_OPTIONS: `${API_BASE}customer/shopping-cart/shopping-options`,
  SELECT_SHIPPING_OPTIONS: `${API_BASE}customer/shopping-cart/select-shopping-options`,
  ITEM: `${API_BASE}customer/shopping-cart/item`,
  MOVE_TO_WISHLIST: `${API_BASE}customer/shopping-cart/move-to-wishlist/{id}`,
  QUANTITY: `${API_BASE}customer/shopping-cart/quantity`,
  APPLY_COUPON_CODE: `${API_BASE}customer/shopping-cart/apply-coupon-code`,
  APPLY_VOUCHER: `${API_BASE}customer/shopping-cart/apply-voucher/{id}`,
  VOUCHERS: `${API_BASE}customer/shopping-cart/vouchers`,
};
