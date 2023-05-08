import { BaseService, GET, Path } from "ts-retrofit";
import IResponse from "../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../infrastructure/HttpClient/HttpService";
import API_PRODUCT from "../Constants/Api/API_PRODUCT";
import { IGetProductDetailsResponse } from "../Models/Product/IGetProductDetailsResponse";

class ProductService extends BaseService {
  @GET(API_PRODUCT.PRODUCT_DETAIL)
  async getProductDetail(
    @Path("id") _id: number,
  ): Promise<IResponse<IGetProductDetailsResponse>> {
    return {} as IResponse<IGetProductDetailsResponse>;
  }
}

export default HttpService.build(ProductService);
