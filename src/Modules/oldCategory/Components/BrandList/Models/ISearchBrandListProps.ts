import { IBrand } from "../../../../../infrastructure/Models/Entity/IBrand";

export interface ISearchBrandListProps {
  brands: IBrand[];
  onBrandChange: (id: number) => void;
  onSearchChange: (search: string) => void;
  onSeeMoreChange: () => void;
  search: string;
  seeMore: boolean;
  totalBrand: number
}
