import { DeviceTypes } from "../../../infrastructure/Models/Theme/IDeviceTypes";

export const DEVICE_TYPE_SIZES = {
  mobile: {
    min: 0,
    max: 980,
  },
  tablet: {
    min: 768,
    max: 980,
  },
  desktop: {
    min: 981,
    max: 2048,
  },
};

export default function getDeviceType(): DeviceTypes {
  let windowsWidth = 1024;
  if (typeof window !== "undefined") {
    windowsWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  } else {
    return DeviceTypes.Desktop;
  }

  if (windowsWidth < DEVICE_TYPE_SIZES.mobile.max) return DeviceTypes.Mobile;
  if (windowsWidth < DEVICE_TYPE_SIZES.tablet.max) return DeviceTypes.Tablet;
  return DeviceTypes.Desktop;
}
