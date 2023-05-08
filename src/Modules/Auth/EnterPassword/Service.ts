import { BaseService, POST, Body } from "ts-retrofit";
import { API_ENTER_PASSWORD_PAGE } from "./Constants";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../../infrastructure/HttpClient/HttpService";
import { IEnterPasswordRequest } from "./Models/IEnterPasswordRequest";
import { IEnterPasswordResponse } from "./Models/IEnterPasswordResponse";

class EnterPasswordPageService extends BaseService {
  @POST(API_ENTER_PASSWORD_PAGE.LOGIN_MIETER)
  async loginMieter(
    @Body _body: Partial<IEnterPasswordRequest>,
  ): Promise<IResponse<IEnterPasswordResponse>> {
    return {} as IResponse<IEnterPasswordResponse>;
  }
}

export default HttpService.build(EnterPasswordPageService);
