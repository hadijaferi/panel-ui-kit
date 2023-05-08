import IRequest from "../../../../infrastructure/Models/HttpClient/IRequest";

export interface IChangePasswordRequest extends IRequest {
  Token: string;
  Password: string;
}
