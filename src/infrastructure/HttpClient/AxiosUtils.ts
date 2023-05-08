import { AxiosError } from "axios";

export const namespace = "retry";

export function isNetworkError(error: AxiosError) {
  return (
    !error.response &&
    Boolean(error.code) && // Prevents retrying cancelled requests
    error.code !== "ECONNABORTED" // Prevents retrying timed out requests
  ); // Prevents retrying unsafe errors
}

const SAFE_HTTP_METHODS = ["get", "head", "options"];
const IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(["put", "delete"]);

/**
 * @param  {Error}  error
 * @return {boolean}
 */
export function isRetryableError(error: AxiosError) {
  return (
    error.code !== "ECONNABORTED" &&
    (!error.response ||
      (error.response?.status >= 500 && error.response?.status <= 599))
  );
}

/**
 * @param  {Error}  error
 * @return {boolean}
 */
export function isSafeRequestError(error: AxiosError) {
  if (!error.config) {
    // Cannot determine if the request can be retried
    return false;
  }

  return (
    isRetryableError(error) &&
    SAFE_HTTP_METHODS.indexOf(error?.config?.method ?? "") !== -1
  );
}

/**
 * @param  {Error}  error
 * @return {boolean}
 */
export function isIdempotentRequestError(error: AxiosError) {
  if (!error.config) {
    // Cannot determine if the request can be retried
    return false;
  }

  return (
    isRetryableError(error) &&
    IDEMPOTENT_HTTP_METHODS.indexOf(error?.config?.method ?? "") !== -1
  );
}

/**
 * @param  {Error}  error
 * @return {boolean}
 */
export function isNetworkOrIdempotentRequestError(error: AxiosError) {
  return isNetworkError(error) || isIdempotentRequestError(error);
}

/**
 * @return {number} - delay in milliseconds, always 0
 */
export function noDelay() {
  return 0;
}

/**
 * @param  {number} [retryNumber=0]
 * @return {number} - delay in milliseconds
 */
export function exponentialDelay(retryNumber = 0) {
  // eslint-disable-next-line no-restricted-properties
  const delay = Math.pow(2, retryNumber) * 100;
  const randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay
  return delay + randomSum;
}

/**
 * Initializes and returns the retry state for the given request/config
 * @param  {AxiosRequestConfig} config
 * @return {Object}
 */
export function getCurrentState(config: any) {
  const currentState = config[namespace] || {};
  currentState.retryCount = currentState.retryCount ?? 0;
  config[namespace] = currentState;
  return currentState;
}

/**
 * Returns the axios-retry options for the current request
 * @param  {AxiosRequestConfig} config
 * @param  {AxiosRetryConfig} defaultOptions
 * @return {AxiosRetryConfig}
 */
export function getRequestOptions(config: any, defaultOptions: any) {
  return { ...defaultOptions, ...config[namespace] };
}

/**
 * @param  {Axios} axios
 * @param  {AxiosRequestConfig} config
 */
export function fixConfig(axiosObj: any, config: any) {
  if (axiosObj.defaults.agent === config.agent) {
    delete config.agent;
  }
  if (axiosObj.defaults.httpAgent === config.httpAgent) {
    delete config.httpAgent;
  }
  if (axiosObj.defaults.httpsAgent === config.httpsAgent) {
    delete config.httpsAgent;
  }
}
