import { IToken } from "../../../../Share/Models/IToken";

export interface IChangePasswordResponse {
  Code: number;
  Token: IToken;
}
