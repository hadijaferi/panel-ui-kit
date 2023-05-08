import { Dispatch } from "redux";
import { SetUserInfoType, USER_INFO_TYPE } from "./types";
import { IUserInfoModalResponse } from "../../Models/UserInfo/IUserInfoModal";

export const ProfileSetUserInfoAction = (
  userInfo: IUserInfoModalResponse | null,
) => (dispatch: Dispatch<SetUserInfoType>) => {
  if (userInfo) {
    return dispatch({
      type: USER_INFO_TYPE,
      payload: { userInfo },
    });
  }
  return null;
};

export const ProfileClearUserInfoAction = () => (
  dispatch: Dispatch<SetUserInfoType>,
) => {
  return dispatch({
    type: USER_INFO_TYPE,
    payload: { userInfo: null },
  });

  return null;
};
