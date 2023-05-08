import { BaseService, GET, QueryMap } from "ts-retrofit";
import HttpService from "../../../../../infrastructure/HttpClient/HttpService";
import IResponse from "../../../../../infrastructure/Models/HttpClient/IResponse";
import { API_OTHER_SELLERS } from "../Constants/OtherSellers";
import { IGetOtherSellersRequest } from "../Models/IGetOtherSellersRequest";
import { IGetOtherSellersResponse } from "../Models/IGetOtherSellersResponse";

class OtherSellersServices extends BaseService {
  @GET(API_OTHER_SELLERS.GET_OTHER_SELLERS)
  async getOtherSellers(
    @QueryMap _query: Partial<IGetOtherSellersRequest>,
  ): Promise<IResponse<IGetOtherSellersResponse>> {
    return {} as IResponse<IGetOtherSellersResponse>;
  }
}

export default HttpService.build(OtherSellersServices);
