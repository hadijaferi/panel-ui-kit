import { IChatUserModel } from "../IChatUserModel";

export interface IChatUser extends IChatUserModel {
  IsOnline: boolean;
  IsTyping: boolean;
}
