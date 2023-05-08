import { BaseService, GET, Path } from "ts-retrofit";
import API_SERVICE from "../Constants/Api/API_SERVICE";
import IResponse from "../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../infrastructure/HttpClient/HttpService";
import { IGetServiceDetailsResponse } from "../Models/Service/IGetServiceDetailsResponse";

class ServiceService extends BaseService {
  @GET(API_SERVICE.SERVICE_DETAILS)
  async getServiceDetail(
    @Path("id") _id: number,
  ): Promise<IResponse<IGetServiceDetailsResponse>> {
    return {} as IResponse<IGetServiceDetailsResponse>;
  }
}

export default HttpService.build(ServiceService);
