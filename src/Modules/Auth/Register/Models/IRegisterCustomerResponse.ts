import { IToken } from "../../../../Share/Models/IToken";

export interface IRegisterCustomerResponse {
  Token: IToken;
  Code: number;
}
