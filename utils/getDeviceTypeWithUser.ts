import { IncomingMessage } from "http";
import { DeviceTypes } from "../src/infrastructure/Models/Theme/IDeviceTypes";

export default function getDeviceTypeWithUser(
  req: IncomingMessage,
): DeviceTypes {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"] || "ssr";
  } else {
    userAgent = navigator.userAgent;
  }
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  return isMobile ? DeviceTypes.Mobile : DeviceTypes.Desktop;
}
