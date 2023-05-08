import { SetUserInfoType, USER_INFO_TYPE } from "./types";
import { IUserInfoModalResponse } from "../../Models/UserInfo/IUserInfoModal";

interface IProfileState {
  userInfoModal: IUserInfoModalResponse | null;
}
const baseState: IProfileState = {
  userInfoModal: null,
};
export const UserInfoReducer = (
  state = baseState,
  action: SetUserInfoType,
): IProfileState => {
  switch (action.type) {
    case USER_INFO_TYPE:
      return {
        ...state,
        userInfoModal: action.payload.userInfo,
      };
    default:
      return state;
  }
};
