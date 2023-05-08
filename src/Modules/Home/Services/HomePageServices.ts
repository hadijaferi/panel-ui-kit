import { BaseService, GET, QueryMap } from "ts-retrofit";
import HttpService from "../../../infrastructure/HttpClient/HttpService";
import { API_HOME_PAGE } from "../Constants/HomePageApi";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import { IMainSliderResponse } from "../Models/MainSlider/IMainSliderResponse";
import { IHomePageListsResponse } from "../Models/HomePageLists/IHomePageListsResponse";
import { IHomePageCategoriesResponse } from "../Models/HomePageCategories/IHomePageCategoriesResponse";
import { IHomePageCategoriesRequest } from "../Models/HomePageCategories/IHomePageCategoriesRequest";
import { IMieter } from "../../../infrastructure/Models/Entity/IMieter";

class HomePageServices extends BaseService {
  @GET(API_HOME_PAGE.GET_HOMEPAGE_LISTS)
  async getHomePageLists(): Promise<IResponse<IHomePageListsResponse>> {
    return {} as IResponse<IHomePageListsResponse>;
  }

  @GET(API_HOME_PAGE.GET_MAIN_SLIDER)
  async getMainSlider(): Promise<IResponse<IMainSliderResponse[]>> {
    return {} as IResponse<IMainSliderResponse[]>;
  }

  @GET(API_HOME_PAGE.GET_HOMEPAGE_CATEGORIES)
  async getCategories(
    @QueryMap _query: IHomePageCategoriesRequest,
  ): Promise<IResponse<IHomePageCategoriesResponse>> {
    return {} as IResponse<IHomePageCategoriesResponse>;
  }

  @GET(API_HOME_PAGE.GET_HOMEPAGE_MIETERS)
  async getMieters(): Promise<IResponse<IMieter[]>> {
    return {} as IResponse<IMieter[]>;
  }
}

export default HttpService.build(HomePageServices);
