import { IBaseProps } from "../../../Models/IBaseProps";
import { iconTypes } from "../../Common/Icon/IIconTypes.ts";

export interface IAppBarTab {
  id: number;
  title?: string;
  icon?: iconTypes;
  activeIcon?: iconTypes;
}

export interface ITabBarProps extends IBaseProps {
  activeId: number;
  tabs: IAppBarTab[];
  theme?: "default" | "border-bottom" | "back-fill";
  onTabBarChange: (activeId: number) => void;
}
