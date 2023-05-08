import { BaseService, GET, QueryMap, POST, Body } from "ts-retrofit";
import { API_LOGIN_PAGE } from "./Constants";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../../infrastructure/HttpClient/HttpService";
import { IIsRegisteredRequest } from "./Models/IIsRegisteredRequest";
import { IIsRegisteredResponse } from "./Models/IIsRegisteredResponse";
import { ISendOTPRequest } from "./Models/ISendOTPRequest";

class LoginPageService extends BaseService {
  @POST(API_LOGIN_PAGE.SEND_OTP)
  async sendOpt(@Body _body: Partial<ISendOTPRequest>): Promise<IResponse> {
    return {} as IResponse;
  }

  @GET(API_LOGIN_PAGE.IS_REGISTERED)
  async isRegistered(
    @QueryMap _body: Partial<IIsRegisteredRequest>,
  ): Promise<IResponse<IIsRegisteredResponse>> {
    return {} as IResponse<IIsRegisteredResponse>;
  }
}

export default HttpService.build(LoginPageService);
