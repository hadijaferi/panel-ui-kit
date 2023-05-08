import {
  BaseService,
  Body,
  DELETE,
  GET,
  PATCH,
  Path,
  POST,
  QueryMap,
} from "ts-retrofit";
import IResponse from "../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../infrastructure/HttpClient/HttpService";
import API_SHOPPING_CART from "../Constants/Api/API_SHOPPING_CART";
import { IShoppingCartItemsResponse } from "../Models/ShoppingCart/IShoppingCartItemsResponse";
import IShoppingCartOrderSummaryResponse from "../Models/ShoppingCart/IShoppingCartOrderSummaryResponse";
import IShoppingShippingAddress from "../Models/ShoppingCart/Entity/IShoppingShippingAddress";
import IShoppingCartAddShippingAddressRequest from "../Models/ShoppingCart/IShoppingCartAddShippingAddressRequest";
import IShoppingCartShippingOptionsResponse from "../Models/ShoppingCart/IShoppingCartShippingOptionsResponse";
import IShoppingCartSelectOptionRequest from "../Models/ShoppingCart/IShoppingCartSelectOptionRequest";
import IShoppingCartAddItemRequest from "../Models/ShoppingCart/IShoppingCartAddItemRequest";
import IShoppingCartDeleteItemRequest from "../Models/ShoppingCart/IShoppingCartDeleteItemRequest";
import IShoppingCartQuantityRequest from "../Models/ShoppingCart/IShoppingCartQuantityRequest";
import IShoppingCartApplyCouponCodeRequest from "../Models/ShoppingCart/IShoppingCartApplyCouponCodeRequest";
import IShoppingCartGetRequest from "../Models/ShoppingCart/IShoppingCartGetRequest";
import IShoppingCartVouchersResponse from "../Models/ShoppingCart/IShoppingCartVouchersResponse";

class ShoppingCartService extends BaseService {
  @GET(API_SHOPPING_CART.COUNT)
  async getCount(): Promise<IResponse<number>> {
    return {} as IResponse<number>;
  }

  @GET(API_SHOPPING_CART.ITEMS)
  async getItems(): Promise<IResponse<IShoppingCartItemsResponse>> {
    return {} as IResponse<IShoppingCartItemsResponse>;
  }

  @GET(API_SHOPPING_CART.ORDER_SUMMARY)
  async getOrderSummary(): Promise<
    IResponse<IShoppingCartOrderSummaryResponse>
  > {
    return {} as IResponse<IShoppingCartOrderSummaryResponse>;
  }

  @GET(API_SHOPPING_CART.SHIPPING_ADDRESS)
  async getShippingAddress(): Promise<IResponse<IShoppingShippingAddress>> {
    return {} as IResponse<IShoppingShippingAddress>;
  }

  @PATCH(API_SHOPPING_CART.SHIPPING_ADDRESS)
  async addShippingAddress(
    @Body _body: IShoppingCartAddShippingAddressRequest,
  ): Promise<IResponse> {
    return {} as IResponse;
  }

  @GET(API_SHOPPING_CART.SHIPPING_OPTIONS)
  async getShippingOptions(): Promise<
    IResponse<IShoppingCartShippingOptionsResponse>
  > {
    return {} as IResponse<IShoppingCartShippingOptionsResponse>;
  }

  @POST(API_SHOPPING_CART.SELECT_SHIPPING_OPTIONS)
  async selectShippingAddress(
    @Body _body: IShoppingCartSelectOptionRequest,
  ): Promise<IResponse> {
    return {} as IResponse;
  }

  @POST(API_SHOPPING_CART.ITEM)
  async addItem(@Body _body: IShoppingCartAddItemRequest): Promise<IResponse> {
    return {} as IResponse;
  }

  @DELETE(API_SHOPPING_CART.ITEM)
  async deleteItem(
    @Body _body: IShoppingCartDeleteItemRequest,
  ): Promise<IResponse> {
    return {} as IResponse;
  }

  @PATCH(API_SHOPPING_CART.MOVE_TO_WISHLIST)
  async moveToWishList(@Path("id") _id: number): Promise<IResponse> {
    return {} as IResponse;
  }

  @PATCH(API_SHOPPING_CART.QUANTITY)
  async changeQuantity(
    @Body _body: IShoppingCartQuantityRequest,
  ): Promise<IResponse> {
    return {} as IResponse;
  }

  @PATCH(API_SHOPPING_CART.APPLY_COUPON_CODE)
  async applyCouponCode(
    @Body _body: IShoppingCartApplyCouponCodeRequest,
  ): Promise<IResponse> {
    return {} as IResponse;
  }

  @PATCH(API_SHOPPING_CART.APPLY_VOUCHER)
  async applyVoucher(@Path("id") _id: number): Promise<IResponse> {
    return {} as IResponse;
  }

  @GET(API_SHOPPING_CART.VOUCHERS)
  async getVouchers(
    @QueryMap _query: IShoppingCartGetRequest,
  ): Promise<IResponse<IShoppingCartVouchersResponse>> {
    return {} as IResponse<IShoppingCartVouchersResponse>;
  }
}

export default HttpService.build(ShoppingCartService);
