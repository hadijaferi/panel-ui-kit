import { BaseService, GET, QueryMap } from "ts-retrofit";
import { API_COMMENT } from "../Constants/Comment";
import { IGetCommentsRequest } from "../Models/IGetCommentListRequest";
import IResponse from "../../../../../infrastructure/Models/HttpClient/IResponse";
import { IGetCommentsResponse } from "../Models/IGetCommentListResponse";
import HttpService from "../../../../../infrastructure/HttpClient/HttpService";

class CommentServices extends BaseService {
  @GET(API_COMMENT.GET_COMMENTS)
  async getCommentList(
    @QueryMap _body: Partial<IGetCommentsRequest>,
  ): Promise<IResponse<IGetCommentsResponse>> {
    return {} as IResponse<IGetCommentsResponse>;
  }
}

export default HttpService.build(CommentServices);
