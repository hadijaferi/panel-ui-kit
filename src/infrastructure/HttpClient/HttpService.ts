import { ServiceBuilder } from "ts-retrofit";
import { API_BASE } from "../../Share/Constants/Api/API";
import HttpResponseHandler from "./HttpResponseHandler";
import HttpRequestInterceptor from "./HttpRequestInterceptor";

export default new ServiceBuilder()
  .setEndpoint(API_BASE)
  .setStandalone(true)
  .setRequestInterceptors(new HttpRequestInterceptor())
  .setResponseInterceptors(new HttpResponseHandler());
