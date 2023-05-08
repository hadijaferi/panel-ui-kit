import { IUserInfoModalResponse } from "../../Models/UserInfo/IUserInfoModal";

export const USER_INFO_TYPE = "USER_INFO_TYPE";

export interface SetUserInfoType {
  type: typeof USER_INFO_TYPE;
  payload: { userInfo: IUserInfoModalResponse | null };
}
