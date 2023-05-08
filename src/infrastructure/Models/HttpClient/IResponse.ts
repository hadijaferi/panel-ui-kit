import { AxiosRequestConfig } from "axios";
import { Modify } from "../Modify";

export interface IErrorResponse<T = any> {
  error: IResponse<T>;
}

export interface IResponseData<T = any> {
  IsSuccess: boolean;
  Message?: string;
  Data: T;
  Errors: string[];
}

export default interface IResponse<T = any> {
  data: IResponseData<T>;
  headers: Map<string, string>;
  status: number;
  statusText: string;
  config: AxiosRequestConfig;
  request?: any;
  response?: IResponse<T>;
}

export type IChatResponse<T = any> = Modify<
  IResponse,
  {
    data: T;
  }
>;
