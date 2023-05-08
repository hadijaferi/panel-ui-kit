import { BaseService, GET, Path, QueryMap } from "ts-retrofit";
import HttpService from "../../../../../infrastructure/HttpClient/HttpService";
import IResponse from "../../../../../infrastructure/Models/HttpClient/IResponse";
import { API_PRODUCT_ITEMS } from "../Constants/ProductItems";
import { IProductItemRequest } from "../Models/IProductItemRequest";
import { IProductItemResponse } from "../Models/IProductItemResponse";

class ProductItemsServices extends BaseService {
  @GET(API_PRODUCT_ITEMS.GET_PRODUCT_ITEMS)
  async getProductItems(
    @Path("id") _id: number,
    @Path("type") _type: string,
    @QueryMap _query: Partial<IProductItemRequest>,
  ): Promise<IResponse<IProductItemResponse>> {
    return {} as IResponse<IProductItemResponse>;
  }
}

export default HttpService.build(ProductItemsServices);
