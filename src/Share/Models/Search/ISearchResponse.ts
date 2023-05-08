import { ICategory } from "../../../infrastructure/Models/Entity/ICategory";
import { IPagination } from "../../../infrastructure/Models/IPagination";
import { ISearchSpecification } from "./ISearchSpecification";
import { IBrand } from "../../../infrastructure/Models/Entity/IBrand";
import { IProduct } from "../../../infrastructure/Models/Entity/IProduct";
import { IBreadcrumb } from "../../../infrastructure/Models/Entity/IBreadcrumb";

export interface ISearchResponse {
  Brands: IBrand[];
  Categories: ICategory[];
  HighestPrice: number;
  Pagination: IPagination;
  PriceRange: number;
  Products: IProduct[];
  Specifications: ISearchSpecification[];
  BreadCrumbs: IBreadcrumb[];
}
