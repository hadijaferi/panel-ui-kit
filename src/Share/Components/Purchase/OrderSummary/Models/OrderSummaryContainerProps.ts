import IShoppingCartOrderSummaryResponse from "../../../../Models/ShoppingCart/IShoppingCartOrderSummaryResponse";

export default interface OrderSummaryContainerProps {
  itemsCount: number;
  orderSummaryDetails: IShoppingCartOrderSummaryResponse;
}
