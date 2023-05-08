import { ICategory } from "../../../../../infrastructure/Models/Entity/ICategory";
import { IBreadcrumb } from "../../../../../infrastructure/Models/Entity/IBreadcrumb";

export interface ISearchCategoryListContainerProps {
  categories: ICategory[];
  breadCrumbs: IBreadcrumb[];
}
