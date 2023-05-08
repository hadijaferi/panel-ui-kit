import { BaseService, GET, Header } from "ts-retrofit";
import API_USERINFO from "../Constants/Api/API_USERINFO";
import IResponse from "../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../infrastructure/HttpClient/HttpService";
import { IUserInfoModalResponse } from "../Models/UserInfo/IUserInfoModal";

class UserInfoService extends BaseService {
  @GET(API_USERINFO.GET_USER_INFO)
  async getUserInfo(
    @Header("Authorization") _authorization?: string,
  ): Promise<IResponse<IUserInfoModalResponse>> {
    return {} as IResponse<IUserInfoModalResponse>;
  }
}
export default HttpService.build(UserInfoService);
