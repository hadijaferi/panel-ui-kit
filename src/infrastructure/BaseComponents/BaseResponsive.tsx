import React from "react";
import getDeviceType from "../../Share/Helpers/Dom/DeviceHelper";
import { DeviceTypes } from "../Models/Theme/IDeviceTypes";

export interface IBaseResponsiveProps {
  children: any;
  MobileComponent?: any;
  DesktopComponent?: any;
}

const BaseResponsive: React.FC<IBaseResponsiveProps> = props => {
  const isMobile = getDeviceType() === DeviceTypes.Mobile;
  const ReturnComponent: any = isMobile
    ? props.MobileComponent
    : props.DesktopComponent;
  return props.children(ReturnComponent);
};

export default BaseResponsive;
