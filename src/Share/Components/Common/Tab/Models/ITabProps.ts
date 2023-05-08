import { ReactNode } from "react";

type theme = "background" | "border";

export interface ITabItem {
  id: number;
  title: string;
  isActive?: boolean;
  content: number | string | ReactNode;
}

export interface ITabProps {
  items: ITabItem[];
  theme?: theme;
  onChangeTab?: (tabItem: ITabItem | undefined) => void;
  catchable?: boolean;
}
