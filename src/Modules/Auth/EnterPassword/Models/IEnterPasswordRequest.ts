import IRequest from "../../../../infrastructure/Models/HttpClient/IRequest";

export interface IEnterPasswordRequest extends IRequest {
  Mobile: string;
  Password: string;
}
