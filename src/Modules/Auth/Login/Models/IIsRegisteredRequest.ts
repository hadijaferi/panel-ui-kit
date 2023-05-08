import IRequest from "../../../../infrastructure/Models/HttpClient/IRequest";

export interface IIsRegisteredRequest extends IRequest {
  Mobile: string;
  UserType: number;
}
