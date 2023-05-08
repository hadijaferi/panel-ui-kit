import { IBrand } from "../../../infrastructure/Models/Entity/IBrand";
import { IProduct } from "../../../infrastructure/Models/Entity/IProduct";
import { ISearchRequest } from "../../../Share/Models/Search/ISearchRequest";
import { ISearchSpecification } from "../../../Share/Models/Search/ISearchSpecification";
import { IBreadcrumb } from "../../../infrastructure/Models/Entity/IBreadcrumb";
import { ICategory } from "../../../infrastructure/Models/Entity/ICategory";

export interface ISearchContainerState {
  loading: boolean;
  brands: Array<IBrand>;
  categories: Array<ICategory>;
  highestPrice: number;
  priceRange: number;
  products: Array<IProduct>;
  specifications: Array<ISearchSpecification>;
  filter: ISearchRequest;
  breadCrumbs: IBreadcrumb[];
}
