import { ServiceBuilder } from "ts-retrofit";
import HttpResponseHandler from "./HttpResponseHandler";
import HttpRequestInterceptor from "./HttpRequestInterceptor";
import ChatApi from "../../Modules/Chat/Shared/Constants/ChatApi";

export default new ServiceBuilder()
  .setEndpoint(ChatApi.BASE)
  .setStandalone(true)
  .setRequestInterceptors(new HttpRequestInterceptor())
  .setResponseInterceptors(new HttpResponseHandler());
