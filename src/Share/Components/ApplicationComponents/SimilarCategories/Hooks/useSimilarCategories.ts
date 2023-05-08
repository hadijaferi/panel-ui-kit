import { useEffect, useState } from "react";
import { ICategory } from "../../../../../infrastructure/Models/Entity/ICategory";
import SimilarCategoryServices from "../Services/Categories";

interface IUseSimilarCategoriesProps {
  entityId: number;
}

interface IReturnUseSimilarCategories {
  categories: ICategory[];
  isLoading: boolean;
}

const useSimilarCategories = (props: IUseSimilarCategoriesProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getCategories = () => {
    SimilarCategoryServices.getSimilarCategories(props.entityId, {})
      .then(res => {
        if (res.data.IsSuccess) {
          setCategories(res.data.Data.Categories);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const returnProps = (): IReturnUseSimilarCategories => {
    return {
      isLoading,
      categories,
    };
  };
  return returnProps();
};

export default useSimilarCategories;
