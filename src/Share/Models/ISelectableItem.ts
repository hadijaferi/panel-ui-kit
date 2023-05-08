import { OptionTypeBase } from "react-select";

export interface ISelectableItem<T = string> extends OptionTypeBase {
  value: T;
  label: string;
  selected?: boolean;
  areaCode?: number;
}
