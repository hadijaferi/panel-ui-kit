import { useState } from "react";
import { IBrand } from "../../../../infrastructure/Models/Entity/IBrand";

export interface ISearchBrandListMobileProps {
  onBrandChange: (id: number) => void;
  brands: IBrand[];
  onSearchChange: (search: string) => void;
  search: string;
  onReset: () => void;
  onSave: () => void;
  disableClearButton: () => boolean;
  disableSaveButton: () => boolean;
}

interface IHookProps {
  brands: IBrand[];
  resetType: () => void;
  setBrands: (newBrands: IBrand[]) => void;
}

const useSearchBrandListMobile = (
  props: IHookProps,
): ISearchBrandListMobileProps => {
  const [search, setSearch] = useState("");
  const [brands, setBrands] = useState<IBrand[]>(
    JSON.parse(JSON.stringify(props.brands)),
  );

  const onBrandChange = (id: number) => {
    const findIndex = brands.findIndex(brand => brand.Id === id);
    if (findIndex !== -1) {
      brands[findIndex].IsChecked = !brands[findIndex].IsChecked;
      setBrands([...brands]);
    }
  };

  const onReset = () => {
    setSearch("");
    setBrands(JSON.parse(JSON.stringify(props.brands)));
    props.resetType();
  };

  const onSave = () => {
    props.setBrands(JSON.parse(JSON.stringify(brands)));
    props.resetType();
  };

  const onSearchChange = (newSearch: string) => {
    setSearch(newSearch);
  };

  const getBrandsWithFilter = () => {
    return brands.filter(brand => brand.Name.includes(search));
  };

  const disableClearButton = (): boolean => {
    return JSON.stringify(props.brands) === JSON.stringify(brands);
  };

  const disableSaveButton = (): boolean => {
    return JSON.stringify(props.brands) === JSON.stringify(brands);
  };

  return {
    brands: getBrandsWithFilter(),
    onBrandChange,
    search,
    onSearchChange,
    onReset,
    onSave,
    disableClearButton,
    disableSaveButton,
  };
};

export default useSearchBrandListMobile;
