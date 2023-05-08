import { AxiosRequestConfig } from "axios";

/**
 *
 * append token for req if needed
 *
 */
export interface IExtendedAxiosRequestConfig extends AxiosRequestConfig {
  addToken?: boolean;
}
