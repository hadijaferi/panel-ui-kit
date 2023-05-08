import { BaseService, GET, QueryMap } from "ts-retrofit";
import HttpService from "../../../infrastructure/HttpClient/HttpService";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import { API_WORK_TIME } from "../Constants/WorkTime";
import { IWorkTimeRequest } from "../Models/WorkTime/IWorkTimeRequest";
import { IWorkTimeResponse } from "../Models/WorkTime/IWorkTimeResponse";

class WorkTimeServices extends BaseService {
  @GET(API_WORK_TIME.GET_WORK_TIMES)
  async getWorkTime(
    @QueryMap _query: Partial<IWorkTimeRequest>,
  ): Promise<IResponse<IWorkTimeResponse>> {
    return {} as IResponse<IWorkTimeResponse>;
  }
}

export default HttpService.build(WorkTimeServices);
