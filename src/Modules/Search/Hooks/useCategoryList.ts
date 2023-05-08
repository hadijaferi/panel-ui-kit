import { useState } from "react";
import { ICategory } from "../../../infrastructure/Models/Entity/ICategory";
import { IBreadcrumb } from "../../../infrastructure/Models/Entity/IBreadcrumb";

export interface ISearchCategoryListContainerProps {
  categories: ICategory[];
  breadCrumbs: IBreadcrumb[];
  loading: boolean;
}

export interface ISearchCategoryChildList {
  DisplayOrder: number;
  Id: number;
  Name: string;
  Child: ISearchCategoryChildList | undefined;
  Categories: ICategory[];
}

export interface ISearchCategoryListProps {
  categoriesChild: ISearchCategoryChildList;
  onSeeMoreChange: () => void;
  categoryLength: number;
  seeMore: boolean;
}

const useCategoryList = (
  props: ISearchCategoryListContainerProps,
): ISearchCategoryListProps => {
  const [seeMore, setSeeMore] = useState(true);

  const categoryChildList = (index: number): ISearchCategoryChildList => {
    if (index + 1 >= props.breadCrumbs?.length) {
      return {
        Id: props.breadCrumbs[index]?.Id,
        DisplayOrder: props.breadCrumbs[index]?.DisplayOrder,
        Name: props.breadCrumbs[index]?.Name,
        Categories: props.categories,
        Child: undefined,
      };
    }
    return {
      Id: props.breadCrumbs[index]?.Id,
      DisplayOrder: props.breadCrumbs[index]?.DisplayOrder,
      Name: props.breadCrumbs[index]?.Name,
      Child: categoryChildList(index + 1),
      Categories: [],
    };
  };

  return {
    categoriesChild: categoryChildList(0),
    seeMore,
    onSeeMoreChange: () => setSeeMore(!seeMore),
    categoryLength: props.breadCrumbs.length + props.categories.length,
  };
};

export default useCategoryList;
