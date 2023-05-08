import { BaseService, GET, QueryMap } from "ts-retrofit";
import HttpService from "../../../infrastructure/HttpClient/HttpService";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import { API_OTHER_SELLER } from "../Constants/OtherSellers";
import { IGetOtherSellersRequest } from "../Models/OtherSellers/IGetOtherSellersRequest";
import { IGetOtherSellersResponse } from "../Models/OtherSellers/IGetOtherSellersResponse";

class OtherSellersServices extends BaseService {
  @GET(API_OTHER_SELLER.GET_OTHER_SERVICES)
  async getOtherSellers(
    @QueryMap _query: Partial<IGetOtherSellersRequest>,
  ): Promise<IResponse<IGetOtherSellersResponse>> {
    return {} as IResponse<IGetOtherSellersResponse>;
  }
}

export default HttpService.build(OtherSellersServices);
