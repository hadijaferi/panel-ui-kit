import { AxiosRequestConfig } from "axios";

export interface IMapIrResponse<T> {
  data: T;
  headers: Map<string, string>;
  status: number;
  statusText: string;
  config: AxiosRequestConfig;
  request?: any;
}
