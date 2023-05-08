export interface IPriceRangeProps {
  value: number[];
  highestPrice: number;
  onRangePriceChange: (priceRange: number[]) => void;
  onRangePriceFilter: () => void;
}
