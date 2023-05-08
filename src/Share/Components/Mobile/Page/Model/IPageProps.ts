import { ReactNode } from "react";
import { IBaseProps } from "../../../../Models/IBaseProps";

export interface IPageProps extends IBaseProps {
  toolbar?: () => ReactNode;
  bottomNavigation?: () => ReactNode;
  navigationDrawer?: () => ReactNode;
  bottomSheet?: () => ReactNode;
  onInit?: () => Promise<void>;
  onShow?: () => Promise<void>;
  onHide?: () => Promise<void>;
}
