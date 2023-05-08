import { IBaseProps } from "../../../Models/IBaseProps";

export interface IOverPageProps extends IBaseProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
  fixed?: boolean;
}
