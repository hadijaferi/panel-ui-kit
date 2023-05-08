export default interface IShoppingCartOrderSummaryResponse {
  OrderTotal: number,
  SubTotal: number,
  SubTotalDiscount: number,
  OrderTotalDiscount: number,
  Shipping: number,
  CouponCode: string
}
