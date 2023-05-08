import { IPagination } from "../../../infrastructure/Models/IPagination";
import { SearchSortRequest } from "../../../Share/Models/Search/ISearchRequest";
import { ISearchContainerState } from "./IContainerState";
import { IBrand } from "../../../infrastructure/Models/Entity/IBrand";
import { ISearchSpecification } from "../../../Share/Models/Search/ISearchSpecification";
import { IProduct } from "../../../infrastructure/Models/Entity/IProduct";

export interface ISearchProps extends ISearchContainerState {
  onSortChange: (selectedSortId: SearchSortRequest) => void;
  onBrandIdsFilterChange: (brands: IBrand[]) => void;
  onPaginationChange: (pagination: IPagination) => void;
  onPriceRangeFilter: (from: number, to: number) => void;
  onSpecificationChange: (specification: ISearchSpecification[]) => void;
  productServiceLink: (product: IProduct) => any;
  onAvailableChange: () => void;
  onOriginalChange: () => void;
}
