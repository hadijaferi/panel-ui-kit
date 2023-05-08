import { API_BASE } from "../../../Share/Constants/Api/API";

export const API_LOGIN_PAGE = {
  IS_REGISTERED: `${API_BASE}identity/validation/registered`,
  SEND_OTP: `${API_BASE}identity/otp`,
};
