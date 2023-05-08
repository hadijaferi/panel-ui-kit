import IRequest from "../../../../infrastructure/Models/HttpClient/IRequest";

export interface IRegisterCustomerRequest extends IRequest {
  Token: string;
  Gender: number;
  FirstName: string;
  LastName: string;
  Password: string;
}
