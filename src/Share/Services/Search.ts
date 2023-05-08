import { BaseService, Body, POST } from "ts-retrofit";
import IResponse from "../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../infrastructure/HttpClient/HttpService";
import { ISearchRequest } from "../Models/Search/ISearchRequest";
import API_SEARCH from "../Constants/Api/API_SEARCH";
import { ISearchResponse } from "../Models/Search/ISearchResponse";
import { ISearchSiteRequest } from "../Models/Search/ISearchSiteRequest";
import { ISearchSiteResponse } from "../Models/Search/ISearchSiteResponse";

class SearchService extends BaseService {
  @POST(API_SEARCH.SEARCH)
  async searchList(
    @Body _body: Partial<ISearchRequest>,
  ): Promise<IResponse<ISearchResponse>> {
    return {} as IResponse<ISearchResponse>;
  }

  @POST(API_SEARCH.SEARCH_SITE)
  async searchSite(
    @Body _body: Partial<ISearchSiteRequest>,
  ): Promise<IResponse<ISearchSiteResponse>> {
    return {} as IResponse<ISearchSiteResponse>;
  }
}

export default HttpService.build(SearchService);
