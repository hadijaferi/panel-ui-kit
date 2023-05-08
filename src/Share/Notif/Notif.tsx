import React, { ReactNode } from "react";
import { toast, ToastOptions } from "react-toastify";
import generateKey from "../../../utils/generateKey";
import getDeviceType from "../Helpers/Dom/DeviceHelper";
import { DeviceTypes } from "../../infrastructure/Models/Theme/IDeviceTypes";
import Toast from "../Components/Common/Toast/Toast";
import NotificationTypes from "../../infrastructure/Models/Theme/NotificationTypes";

class Notification {
  public error = (
    content: string | ReactNode,
    title: string,
    option: ToastOptions = {},
  ) => {
    return this.show("error", content, title, option);
  };

  public success = (
    content: string | ReactNode,
    title: string,
    option: ToastOptions = {},
  ) => {
    return this.show("success", content, title, option);
  };

  public warning = (
    content: string | ReactNode,
    title: string,
    option: ToastOptions = {},
  ) => {
    return this.show("warning", content, title, option);
  };

  public info = (
    content: string | ReactNode,
    title: string,
    option: ToastOptions = {},
  ) => {
    return this.show("info", content, title, option);
  };

  public show = (
    type: NotificationTypes,
    description: ReactNode,
    title: string,
    options: ToastOptions = {},
  ) => {
    const defaultOptions: ToastOptions = {
      hideProgressBar: true,
      autoClose: 3000,
      toastId: generateKey("toast"),
    };

    let handler: any;
    switch (type) {
      case "success":
        handler = toast.success;
        break;
      case "info":
        handler = toast.info;
        break;
      case "warning":
        handler = toast.warning;
        break;

      case "error":
      default:
        handler = toast.error;
    }
    if (getDeviceType() !== DeviceTypes.Desktop) {
      options.draggable = false;
      options.closeOnClick = false;
    }
    const combineOptions = {
      ...defaultOptions,
      ...options,
    };

    handler(
      <Toast
        {...{
          title,
          description,
          type,
          options: combineOptions,
          closeFunc: () => {
            toast.dismiss(combineOptions.toastId);
          },
        }}
      />,
      combineOptions,
    );
  };
}

export const notif = new Notification();
