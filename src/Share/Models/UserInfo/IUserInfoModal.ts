import { IPicture } from "../../../infrastructure/Models/Entity/IPicture";

export interface IUserInfoModalResponse {
  FullName: string;
  FirstName: string;
  LastName: string;
  Avatar: IPicture;
}
