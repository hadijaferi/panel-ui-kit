import { BaseService, POST, Body } from "ts-retrofit";
import { API_OTP_VALIDATION_PAGE } from "./Constants";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../../infrastructure/HttpClient/HttpService";
import { ICheckOTPRequest } from "./Models/ICheckOTPRequest";
import { IOTPCheckResponse } from "./Models/IOTPCheckResponse";

class RegisterPageService extends BaseService {
  @POST(API_OTP_VALIDATION_PAGE.CHECK_OTP)
  async checkOtp(
    @Body _body: Partial<ICheckOTPRequest>,
  ): Promise<IResponse<IOTPCheckResponse>> {
    return {} as IResponse<IOTPCheckResponse>;
  }
}

export default HttpService.build(RegisterPageService);
