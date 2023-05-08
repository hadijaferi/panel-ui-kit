import { ResponseInterceptor } from "ts-retrofit";
import axios from "axios";
import { translator } from "../../Language/i18n";
import { notif } from "../../Share/Notif/Notif";
import IRequest from "../Models/HttpClient/IRequest";
import IResponse from "../Models/HttpClient/IResponse";
import JwtService from "../../Share/Services/JwtService";
import {
  fixConfig,
  getCurrentState,
  getRequestOptions,
  isNetworkOrIdempotentRequestError,
  noDelay,
} from "./AxiosUtils";

/**
 *
 * all 401 failed request goes to queue and retry after refresh token
 *
 */
const queue: Map<
  string,
  {
    resolve: any;
    reject: any;
  }
> = new Map();
// pause concurrent request for refresh token
let isRefreshing = false;

export function appendToQueue(key: string, config: any) {
  queue.set(key, config);
}

export function removeFromQueue(key: string) {
  queue.delete(key);
}

export function retryQueuedRequest(bearer: string | null) {
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of queue.entries()) {
    if (typeof bearer === "string") {
      value.resolve(bearer);
    } else {
      value.reject(`url:${key} request failed`);
    }
    /**
     * remove pended request from queue
     */
    removeFromQueue(key);
  }
}

function showNotificationMessages(
  value: IResponse | undefined,
  showDefaultError = false,
): void {
  if (value?.data) {
    const { data } = value;
    const NotificationHelper = data.IsSuccess ? notif.success : notif.error;
    const notificationTitle = data.IsSuccess
      ? "http.successRequestTitle"
      : "http.failedRequestTitle";
    if (data?.Errors?.length) {
      data.Errors.map(item =>
        NotificationHelper(item, translator.t(notificationTitle)),
      );
      return;
    }

    if (data.Message?.length) {
      NotificationHelper(data.Message, translator.t(notificationTitle));
      return;
    }
  }

  if (showDefaultError) {
    notif.error(
      translator.t("http.failedRequest"),
      translator.t("http.failedRequestTitle"),
    );
  }
}

function parseRequestData(_data: string | object) {
  let data = {};
  if (typeof _data === "string") {
    try {
      data = JSON.parse(_data);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
  return data;
}

function canShowErrorNotification(_data: IRequest & any) {
  return _data?.errorNotification === true;
}

function canShowSuccessNotification(_data: IRequest & any) {
  return _data?.successNotification === true;
}
class HttpResponseHandler extends ResponseInterceptor {
  onFulfilled = async (value: IResponse): Promise<IResponse> => {
    const requestData = value.config.data;
    const data = parseRequestData(requestData);
    if (canShowErrorNotification(data) || canShowSuccessNotification(data)) {
      showNotificationMessages(value);
    }
    if (value?.data) {
      return Promise.resolve<IResponse>(value);
    }

    return Promise.reject(value);
  };

  onRejected = (error: IResponse): Promise<IResponse> => {
    super.onRejected(error);
    const err: IResponse = { ...error };
    const isRetryable = !!error?.config?.data?.isRetryable;
    if (isRetryable) {
      // TODO show retry
    } else {
      let { data } = error?.config ?? {};

      data = parseRequestData(data);

      if (canShowErrorNotification(data)) {
        showNotificationMessages(err.response, true);
      }
    }
    /**
     *
     *
     *
     *
     */
    const { config } = err ?? {};
    // If we have no information to retry the request
    if (!config) {
      return Promise.reject(error);
    }

    const {
      retries = 3,
      retryCondition = isNetworkOrIdempotentRequestError,
      retryDelay = noDelay,
      shouldResetTimeout = false,
    } = getRequestOptions(config, {});

    const currentState = getCurrentState(config);

    const shouldRetry =
      retryCondition(error) && currentState.retryCount < retries;
    if (shouldRetry) {
      currentState.retryCount += 1;
      const delay = retryDelay(currentState.retryCount, error);

      // Axios fails merging this configuration to the default configuration because it has an issue
      // with circular structures: https://github.com/mzabriskie/axios/issues/370
      fixConfig(axios, config);

      if (
        !shouldResetTimeout &&
        config.timeout &&
        currentState.lastRequestTime
      ) {
        const lastRequestDuration = Date.now() - currentState.lastRequestTime;
        // Minimum 1ms timeout (passing 0 or less to XHR means no timeout)
        config.timeout = Math.max(
          config.timeout - lastRequestDuration - delay,
          1,
        );
      }
      config.transformRequest = [data => data];
      return new Promise(resolve =>
        setTimeout(() => resolve(axios(config)), delay),
      );
    }
    const status = error?.response?.status;
    if (status === 401) {
      /**
       *
       * for now only refresh token in client side
       *
       *
       */
      if (isRefreshing) {
        if (error?.config) {
          const url = error?.config?.url || "";
          return new Promise((resolve, reject) => {
            // append new failed requests to queue to resume after refresh token
            appendToQueue(url, {
              resolve,
              reject,
            });
          })
            .then(bearer => {
              /**
               * retry pended request
               */
              error.config.headers.Authorization = bearer;
              return axios(error.config);
            })
            .catch(() => {
              return Promise.reject(error.config);
            });
        }
        return Promise.reject(error);
      }
      isRefreshing = true;
      return JwtService.refreshToken()
        .then((token: string) => {
          // append token to default instance
          const bearer = `Bearer ${token}`;
          axios.defaults.headers.Authorization = bearer;
          retryQueuedRequest(bearer);
          return axios(error.config);
        })
        .catch(() => {
          // if (statusCode === "401" || statusCode === "400") {
          // }
          // clear all queued request
          queue.clear();
          return Promise.reject(err);
        })
        .finally(() => {
          isRefreshing = false;
        });
    }
    return Promise.reject(err);
  };
}

export default HttpResponseHandler;
