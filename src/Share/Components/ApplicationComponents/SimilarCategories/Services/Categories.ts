import { BaseService, GET, Path, QueryMap } from "ts-retrofit";
import HttpService from "../../../../../infrastructure/HttpClient/HttpService";
import IResponse from "../../../../../infrastructure/Models/HttpClient/IResponse";
import { API_SIMILAR_CATEGORY } from "../Constants/SimilarCategories";
import { ISimilarCategoryResponse } from "../Models/ISimilarCategoryResponse";

class SimilarCategoryServices extends BaseService {
  @GET(API_SIMILAR_CATEGORY.SIMILAR_CATEGORY)
  async getSimilarCategories(
    @Path("id") _id: number,
    @QueryMap _query: Partial<{}>,
  ): Promise<IResponse<ISimilarCategoryResponse>> {
    return {} as IResponse<ISimilarCategoryResponse>;
  }
}

export default HttpService.build(SimilarCategoryServices);
