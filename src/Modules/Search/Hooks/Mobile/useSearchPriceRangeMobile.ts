import { useState } from "react";

export interface IPriceRangeContainerProps {
  from: number;
  to: number;
  highestPrice: number;
  resetType: () => void;
  onPriceRangeChange: (newFrom: number, newTo: number) => void;
}

interface IHookProps {
  value: number[];
  highestPrice: number;
  onRangePriceChange: (priceRange: number[]) => void;
  onResetPriceRange: () => void;
  onCloseFilter: () => void;
  isActiveFilter: () => boolean;
  onSavePriceRangeChange: () => void;
}

const useSearchPriceRangeMobile = (
  props: IPriceRangeContainerProps,
): IHookProps => {
  const initialState = [props.from, props.to ? props.to : props.highestPrice];
  const [value, setValue] = useState([...initialState]);

  const onRangePriceChange = (newValue: number[]) => {
    setValue([...newValue]);
  };

  const onResetPriceRange = () => {
    setValue([...initialState]);
  };

  const isActiveFilter = (): boolean => {
    return JSON.stringify(initialState) === JSON.stringify(value);
  };

  const onCloseFilter = () => {
    onResetPriceRange();
    props.resetType();
  };

  const onSavePriceRangeChange = () => {
    props.onPriceRangeChange(value[0], value[1]);
    props.resetType();
  };

  return {
    highestPrice: props.highestPrice,
    value,
    onRangePriceChange,
    onResetPriceRange,
    isActiveFilter,
    onCloseFilter,
    onSavePriceRangeChange,
  };
};

export default useSearchPriceRangeMobile;
