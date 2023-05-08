import { BaseService, GET } from "ts-retrofit";
import HttpService from "../../../infrastructure/HttpClient/HttpService";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import { API_FLOOR } from "../Constants/Floor";
import { IGetFloorListResponse } from "../Models/Floor/IGetFloorListResponse";

class FloorServices extends BaseService {
  @GET(API_FLOOR.GET_FLOOR_LIST)
  async getFloorList(): Promise<IResponse<IGetFloorListResponse>> {
    return {} as IResponse<IGetFloorListResponse>;
  }
}

export default HttpService.build(FloorServices);
