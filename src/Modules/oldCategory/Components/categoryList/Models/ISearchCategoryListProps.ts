import { ICategory } from "../../../../../infrastructure/Models/Entity/ICategory";

export interface ISearchCategoryListProps {
  categoriesChild: ISearchCategoryChildList;
  onSeeMoreChange: () => void;
  categoryLength: number;
  seeMore: boolean;
}

export interface ISearchCategoryChildList {
  DisplayOrder: number;
  Id: number;
  Name: string;
  Child: ISearchCategoryChildList | undefined;
  Categories: ICategory[];
}
