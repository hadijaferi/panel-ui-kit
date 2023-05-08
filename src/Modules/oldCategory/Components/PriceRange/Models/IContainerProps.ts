export interface IPriceRangeContainerProps {
  from: number;
  to: number;
  highestPrice: number;
  onRangePriceFilter: (from: number, to: number) => void;
}
