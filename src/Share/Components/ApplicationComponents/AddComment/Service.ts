import { BaseService, Body, GET, Path, POST } from "ts-retrofit";
import { API_ADD_COMMENT } from "./Constants";
import IResponse from "../../../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../../../infrastructure/HttpClient/HttpService";
import { IAddCommentRequest } from "./Models/IAddCommentRequest";
import { IGetProductDetailsCommentsResponse } from "./Models/IGetProductDetailsCommentsResponse";

class AddCommentServices extends BaseService {
  @POST(API_ADD_COMMENT.ADD_COMMENT)
  async submitAddComments(
    @Body _body: Partial<IAddCommentRequest>,
  ): Promise<IResponse<{}>> {
    return {} as IResponse<{}>;
  }

  @GET(API_ADD_COMMENT.GET_PRODUCT_DETAILS_COMMENTS)
  async getProductDetailsComments(
    @Path("id") _id: number,
  ): Promise<IResponse<IGetProductDetailsCommentsResponse>> {
    return {} as IResponse<IGetProductDetailsCommentsResponse>;
  }
}

export default HttpService.build(AddCommentServices);
