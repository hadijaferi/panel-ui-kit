import React from "react";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import style from "./Desktop.module.sass";
import RangeSlider from "../../../../../Share/Components/Common/RangeSlider/RangeSlider";
import Button from "../../../../../Share/Components/Common/Button/Button";
import useSearchPriceRange, {
  IPriceRangeContainerProps,
} from "../../../Hooks/Desktop/useSearchPriceRange";

const SearchPriceRangeDesktop = (props: IPriceRangeContainerProps) => {
  const hookPriceRange = useSearchPriceRange(props);
  if (props.highestPrice === 0) {
    return null;
  }
  return (
    <div className={generateClassName([style.acPriceRange, "card", "m-b-16"])}>
      <div className={style.head}>محدوده قیمت</div>
      <div className="p-x-16 p-y-16">
        <div className=" m-b-32">
          <div className="d-flex flex-x-between m-b-16 p-x-8 fontWeight-700">
            <span>
              <span className="m-l-4">{hookPriceRange.value[1]}</span>
              <span>تومان</span>
            </span>
            <span>
              <span className="m-l-4">{hookPriceRange.value[0]}</span>
              <span>تومان</span>
            </span>
          </div>
          <div className="d-flex flex-x-center">
            <RangeSlider
              min={0}
              max={hookPriceRange.highestPrice}
              values={hookPriceRange.value}
              onChange={hookPriceRange.onRangePriceChange}
              step={1}
            />
          </div>
        </div>
        <Button
          className="col-12"
          color="red"
          size="medium"
          onClick={hookPriceRange.onRangePriceFilter}
          radius="radius16">
          <span className="fontWeight-700">اعمال محدوده قیمت</span>
        </Button>
      </div>
    </div>
  );
};

export default SearchPriceRangeDesktop;
