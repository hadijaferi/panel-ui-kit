import { BaseService, POST, Body, GET, QueryMap, Config } from "ts-retrofit";
import { API_REGISTER_PAGE } from "./Constants";
import IResponse from "../../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../../infrastructure/HttpClient/HttpService";

import { IRegisterCustomerRequest } from "./Models/IRegisterCustomerRequest";
import { IRegisterCustomerResponse } from "./Models/IRegisterCustomerResponse";
import { IGetTokenGuestResponse } from "./Models/IGetTokenGuestResponse";

class RegisterPageService extends BaseService {
  @POST(API_REGISTER_PAGE.REGISTER_CUSTOMER)
  async registerCustomer(
    @Body _body: Partial<IRegisterCustomerRequest>,
  ): Promise<IResponse<IRegisterCustomerResponse>> {
    return {} as IResponse<IRegisterCustomerResponse>;
  }

  @GET(API_REGISTER_PAGE.GET_TOKEN_GUEST)
  @Config({
    data: {
      errorNotification: true,
    },
  })
  async getTokenGuest(
    @QueryMap _body: Partial<{}>,
  ): Promise<IResponse<IGetTokenGuestResponse>> {
    return {} as IResponse<IGetTokenGuestResponse>;
  }
}

export default HttpService.build(RegisterPageService);
