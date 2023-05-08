import IRequest from "../../../../infrastructure/Models/HttpClient/IRequest";

export interface ICheckOTPRequest extends IRequest {
  Otp: string;
  Mobile: string;
}
