import { API_BASE } from "../../../Share/Constants/Api/API";

export const API_OTP_VALIDATION_PAGE = {
  IS_REGISTERED: `${API_BASE}identity/validation/registered`,
  SEND_OTP: `${API_BASE}identity/otp`,
  CHECK_OTP: `${API_BASE}identity/otp/verify`,
};
