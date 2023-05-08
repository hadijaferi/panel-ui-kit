import { BaseService, GET, QueryMap } from "ts-retrofit";
import IResponse from "../../../../../infrastructure/Models/HttpClient/IResponse";
import { API_USER_RATING } from "../Constants/UserRating";
import { IReviewsOverallResponse } from "../Models/IReviewsOverallResponse";
import HttpService from "../../../../../infrastructure/HttpClient/HttpService";

class UserRatingServices extends BaseService {
  @GET(API_USER_RATING.GET_REVIEWS_OVER)
  async getOverall(
    @QueryMap _body: { ProductId: number },
  ): Promise<IResponse<IReviewsOverallResponse>> {
    return {} as IResponse<IReviewsOverallResponse>;
  }
}

export default HttpService.build(UserRatingServices);
