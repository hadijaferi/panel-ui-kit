import { BaseService, Body, POST } from "ts-retrofit";
import HttpService from "../../../infrastructure/HttpClient/HttpService";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import { API_STORE } from "../Constants/Store";
import { IGetStoreListRequest } from "../Models/Store/IGetStoreListRequest";
import { IGetStoreListResponse } from "../Models/Store/IGetStoreListResponse";

class StoreServices extends BaseService {
  @POST(API_STORE.GET_STORE_LIST)
  async getStoreList(
    @Body _body: Partial<IGetStoreListRequest>,
  ): Promise<IResponse<IGetStoreListResponse>> {
    return {} as IResponse<IGetStoreListResponse>;
  }
}

export default HttpService.build(StoreServices);
