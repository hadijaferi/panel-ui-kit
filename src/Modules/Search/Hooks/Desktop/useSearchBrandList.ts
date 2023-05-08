import { useState } from "react";
import { IBrand } from "../../../../infrastructure/Models/Entity/IBrand";

export interface ISearchBrandListProps {
  getBrandsWithFilter: (propsBrandList: IBrand[]) => IBrand[];
  onBrandChange: (id: number, propsBrandList: IBrand[]) => IBrand[];
  onSearchChange: (search: string) => void;
  onSeeMoreChange: () => void;
  search: string;
  seeMore: boolean;
}

const useSearchBrandList = (): ISearchBrandListProps => {
  const [search, setSearch] = useState("");
  const [seeMore, setSeeMore] = useState(false);

  const onBrandChange = (id: number, propsBrandList: IBrand[]): IBrand[] => {
    const findIndex = propsBrandList.findIndex(brand => brand.Id === id);
    if (findIndex !== -1) {
      propsBrandList[findIndex].IsChecked = !propsBrandList[findIndex]
        .IsChecked;
      return propsBrandList;
    }
    return [];
  };

  const onSearchChange = (newSearch: string) => {
    setSearch(newSearch);
  };

  const getBrandsWithFilter = (propsBrandList: IBrand[]) => {
    return propsBrandList.filter(brand => brand.Name.includes(search));
  };

  const onSeeMoreChange = () => {
    setSeeMore(!seeMore);
  };

  return {
    getBrandsWithFilter,
    onBrandChange,
    search,
    onSearchChange,
    seeMore,
    onSeeMoreChange,
  };
};

export default useSearchBrandList;
