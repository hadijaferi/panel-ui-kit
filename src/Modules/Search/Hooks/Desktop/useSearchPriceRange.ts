import { useState } from "react";

export interface IPriceRangeContainerProps {
  from: number;
  to: number;
  highestPrice: number;
  onRangePriceFilter: (from: number, to: number) => void;
}


export interface IPriceRangeProps {
  value: number[];
  highestPrice: number;
  onRangePriceChange: (priceRange: number[]) => void;
  onRangePriceFilter: () => void;
}


const useSearchPriceRange = (
  props: IPriceRangeContainerProps,
): IPriceRangeProps => {
  const [value, setValue] = useState([
    props.from,
    props.to ? props.to : props.highestPrice,
  ]);

  const onRangePriceChange = (newValue: number[]) => {
    setValue(newValue);
  };

  const onRangePriceFilter = () => {
    const from = value[0] || 0;
    const to = value[1] || 0;
    props.onRangePriceFilter(from, to);
  };

  return {
    highestPrice: props.highestPrice,
    value,
    onRangePriceChange,
    onRangePriceFilter,
  };
};

export default useSearchPriceRange;
