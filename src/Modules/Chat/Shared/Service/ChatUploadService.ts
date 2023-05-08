import axios from "axios";
import ChatApi from "../Constants/ChatApi";
import { notif } from "../../../../Share/Notif/Notif";

const ChatUploadService = axios.create({
  baseURL: ChatApi.BASE,
  url: ChatApi.CHAT_UPLOAD,
  method: "POST",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// request interceptor
ChatUploadService.interceptors.request.use(config => {
  config.withCredentials = false;
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("chatToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// response interceptor
ChatUploadService.interceptors.response.use(value => {
  const {
    config: { data: requestData },
  } = value;
  const { data } = value;

  // check can show notification
  if (
    !requestData?.noNotification &&
    (data?.Message?.length || data?.Errors?.length)
  ) {
    const isSuccess = !!data?.IsSuccess;
    const notificationTitle = isSuccess ? "موفق" : "خطا";
    if (data?.Message?.length) {
      notif.show(
        isSuccess ? "success" : "error",
        data.Message,
        notificationTitle,
      );
    }

    if (data?.Errors?.length) {
      data.Errors.forEach((error: string) => {
        notif.show(isSuccess ? "success" : "error", error, notificationTitle);
      });
    }
  }

  if (data) {
    return Promise.resolve(value);
  }

  return Promise.reject(value);
});

export default ChatUploadService;
