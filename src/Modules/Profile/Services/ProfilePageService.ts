import { BaseService, GET, QueryMap } from "ts-retrofit";
import { API_PROFILE_PAGE } from "../Constants/ProfilePageApi";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../../infrastructure/HttpClient/HttpService";
import { ICommentsResponse } from "../Models/Comments/ICommentsResponse";
import { ICommentsRequest } from "../Models/Comments/ICommentsRequest";

class ProfilePageService extends BaseService {
  @GET(API_PROFILE_PAGE.GET_PROFILE_COMMENTS)
  async getComments(
    @QueryMap _query: ICommentsRequest,
  ): Promise<IResponse<ICommentsResponse>> {
    return {} as IResponse<ICommentsResponse>;
  }
}

export default HttpService.build(ProfilePageService);
