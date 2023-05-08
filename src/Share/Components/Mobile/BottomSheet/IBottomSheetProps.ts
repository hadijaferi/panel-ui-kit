import { IBaseProps } from "../../../Models/IBaseProps";

export interface IBottomSheetProps extends IBaseProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
  noBg?: boolean;
  fixed?: boolean;
}
