import { iconTypes } from "../../../../Common/Icon/IIconTypes.ts";
import { IBaseProps } from "../../../../../Models/IBaseProps";

export interface IToolbarButtonProps extends IBaseProps{
  icon: iconTypes;
  onClick: () => void;
}
