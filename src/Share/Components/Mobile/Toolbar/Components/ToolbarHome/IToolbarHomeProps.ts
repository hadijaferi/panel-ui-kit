export interface IToolbarHomeProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchIsOpen: boolean;
  setSearchIsOpen: (isOpen: boolean) => void;
  onNavigationClick: () => void;
}
