import { useState } from "react";
import { IBrand } from "../../../../infrastructure/Models/Entity/IBrand";
import { IBreadcrumb } from "../../../../infrastructure/Models/Entity/IBreadcrumb";
import { ICategory } from "../../../../infrastructure/Models/Entity/ICategory";
import searchFactory from "../../Factory";
import { ISearchRequest } from "../../../../Share/Models/Search/ISearchRequest";
import { ISearchSpecification } from "../../../../Share/Models/Search/ISearchSpecification";

export enum filterType {
  EMPTY,
  CATEGORY,
  BRANDS,
  PRICE_RANGE,
  SPECIFICATION,
}

export interface ISearchFilteringMobileProps {
  showFilter: boolean;
  to: number;
  from: number;
  highestPrice: number;
  onShowFilterChange: () => void;
  specifications: ISearchSpecification[];
  onFullFilterChange: (queryParameters: Partial<ISearchRequest>) => void;
  brands: IBrand[];
  filter: ISearchRequest;
  categories: ICategory[];
  breadCrumbs: IBreadcrumb[];
}

export interface ISearchFilteringMobileHookProps {
  closeFilter: () => void;
  type: filterType;
  setType: (type: filterType) => void;
  clearBrandFilter: () => void;
  brands: IBrand[];
  setBrands: (newBrands: IBrand[]) => void;
  onResetType: () => void;
  from: number;
  to: number;
  onPriceRangeChange: (newFrom: number, newTo: number) => void;
  selectSpecification: (indexOfSpecification: number) => void;
  currentSelectSpecificationIndex: number;
  specifications: ISearchSpecification[];
  onSpecificationsSave: (newSpe: ISearchSpecification[]) => void;
  isActiveFilterBrands: () => boolean;
  isActiveFilterPriceRange: () => boolean;
  isActiveFilterSpecification: (specificationIndex: number) => boolean;
  onSubFilter: () => void;
}

const useSearchFilteringMobile = (
  props: ISearchFilteringMobileProps,
): ISearchFilteringMobileHookProps => {
  const [type, setType] = useState<filterType>(filterType.EMPTY);
  const [from, setFrom] = useState<filterType>(props.from);
  const [to, setTo] = useState<filterType>(props.to);
  const [
    currentSelectSpecificationIndex,
    setCurrentSelectSpecificationIndex,
  ] = useState(0);
  const [brands, setBrands] = useState<IBrand[]>(
    JSON.parse(JSON.stringify(props.brands)),
  );
  const [specifications, setSpecifications] = useState<ISearchSpecification[]>(
    JSON.parse(JSON.stringify(props.specifications)),
  );

  const clearBrandFilter = () => {
    setBrands(JSON.parse(JSON.stringify(props.brands)));
    setSpecifications(JSON.parse(JSON.stringify(props.specifications)));
    setType(filterType.EMPTY);
    setFrom(props.from);
    setTo(props.to);
  };

  const closeFilter = () => {
    clearBrandFilter();
    props.onShowFilterChange();
  };

  const onSetBrands = (newBrands: IBrand[]) => {
    setBrands([...newBrands]);
  };

  const onResetType = () => {
    setType(filterType.EMPTY);
  };

  const onPriceRangeChange = (newFrom: number, newTo: number) => {
    setFrom(newFrom);
    setTo(newTo);
  };

  const selectSpecification = (index: number) => {
    setType(filterType.SPECIFICATION);
    setCurrentSelectSpecificationIndex(index);
  };
  const onSpecificationsSave = (newSpe: ISearchSpecification[]) => {
    setSpecifications([...newSpe]);
    setType(filterType.EMPTY);
  };

  const isActiveFilterBrands = (): boolean => {
    return brands.find(brand => brand.IsChecked) !== undefined;
  };

  const isActiveFilterPriceRange = (): boolean => {
    return !(from === props.from && to === props.to);
  };

  const isActiveFilterSpecification = (specificationIndex: number): boolean => {
    return (
      specifications[specificationIndex].Attributes.find(
        specification => specification.IsChecked,
      ) !== undefined
    );
  };

  const onSubFilter = () => {
    setType(filterType.EMPTY);
    const requestBody: Partial<ISearchRequest> = {
      Brands: searchFactory.getActiveBrands(brands),
      Specifications: searchFactory.getActiveSpecifications(specifications),
      PriceRangeFrom: from,
      PriceRangeTo: to,
    };
    props.onFullFilterChange(requestBody);
    props.onShowFilterChange();
  };

  return {
    closeFilter,
    type,
    setType,
    setBrands: onSetBrands,
    from,
    to,
    brands,
    clearBrandFilter,
    onResetType,
    onPriceRangeChange,
    selectSpecification,
    currentSelectSpecificationIndex,
    specifications,
    onSpecificationsSave,
    isActiveFilterBrands,
    isActiveFilterPriceRange,
    isActiveFilterSpecification,
    onSubFilter,
  };
};

export default useSearchFilteringMobile;
