import { IBaseProps } from "../../../../../Models/IBaseProps";

export interface IToolbarSearchProps extends IBaseProps{
  searchValue: string;
  searchIsOpen?: boolean;
  onSearchChange: (value: string) => void;
  isLoading?: boolean;
  onSearchToggle: (open: boolean) => void;
}
