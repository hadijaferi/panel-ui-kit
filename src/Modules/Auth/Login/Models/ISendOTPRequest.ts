import IRequest from "../../../../infrastructure/Models/HttpClient/IRequest";

export interface ISendOTPRequest extends IRequest {
  Mobile: string;
}
