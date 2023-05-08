import { iconTypes } from "../../Icon/IIconTypes.ts";

export interface ITabItem {
  title: string;
  id?: number;
}

export interface ITabSelectProps {
  item: Array<ITabItem>;
  title?: string;
  icon?: iconTypes;
  activeTab: number;
  onChange: (tabActive: number) => void;
  sticky?: boolean;
  className?: string;
}
