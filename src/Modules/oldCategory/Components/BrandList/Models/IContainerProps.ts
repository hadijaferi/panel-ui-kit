import { IBrand } from "../../../../../infrastructure/Models/Entity/IBrand";

export default interface ISearchBrandListContainerProps {
  brands: IBrand[];
  onBrandIdsFilterChange: (brands: IBrand[]) => void;
}
