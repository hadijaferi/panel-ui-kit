import { BaseService, POST, Body } from "ts-retrofit";
import { API_SET_PASSWORD_PAGE } from "./Constants";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../../infrastructure/HttpClient/HttpService";
import { IChangePasswordResponse } from "./Models/IChangePasswordResponse";
import { IChangePasswordRequest } from "./Models/IChangePasswordRequest";

class SetPasswordPageService extends BaseService {
  @POST(API_SET_PASSWORD_PAGE.CHANGE_PASSWORD)
  async changePassword(
    @Body _body: Partial<IChangePasswordRequest>,
  ): Promise<IResponse<IChangePasswordResponse>> {
    return {} as IResponse<IChangePasswordResponse>;
  }
}

export default HttpService.build(SetPasswordPageService);
