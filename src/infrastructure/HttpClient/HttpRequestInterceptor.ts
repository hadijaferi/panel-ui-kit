import { RequestInterceptor } from "ts-retrofit";
import { AxiosRequestConfig } from "axios";
import ChatApi from "../../Modules/Chat/Shared/Constants/ChatApi";
import JwtService from "../../Share/Services/JwtService";
import { getCurrentState } from "./AxiosUtils";

export default class HttpRequestInterceptor extends RequestInterceptor {
  onFulfilled = (
    config: AxiosRequestConfig,
  ): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
    /**
     * meta data append to request config
     */
    const currentState = getCurrentState(config);
    currentState.lastRequestTime = Date.now();
    config.withCredentials = false;
    const val = JwtService.getToken();
    if (val?.value?.length && !config.url?.startsWith("https://map.ir"))
      config.headers.Authorization = `Bearer ${val.value}`;
    if (config?.url?.startsWith(ChatApi.BASE) && typeof window !== "undefined")
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "chatToken",
      )}`;
    return Promise.resolve(config);
  };
}
