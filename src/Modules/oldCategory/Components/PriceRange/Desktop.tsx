import React, { Component } from "react";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import style from "./Desktop.module.sass";
import Button from "../../../../Share/Components/Common/Button/Button";
import { IPriceRangeProps } from "./Models/IPriceRangeProps";
import RangeSlider from "../../../../Share/Components/Common/RangeSlider/RangeSlider";

class SearchPriceRangeDesktop extends Component<IPriceRangeProps> {
  render() {
    return (
      <div className={generateClassName([style.acPriceRange, "card"])}>
        <div className={style.head}>محدوده قیمت</div>
        <div className="p-x-16 p-y-16">
          <div className=" m-b-32">
            <div className="d-flex flex-x-between m-b-16 p-x-8 fontWeight-700">
              <span>
                <span className="m-l-4">{this.props.value[1]}</span>
                <span>تومان</span>
              </span>
              <span>
                <span className="m-l-4">{this.props.value[0]}</span>
                <span>تومان</span>
              </span>
            </div>
            <div className="d-flex flex-x-center">
              <RangeSlider
                min={0}
                max={this.props.highestPrice}
                values={this.props.value}
                onChange={this.props.onRangePriceChange}
                step={1}
              />
            </div>
          </div>
          <Button
            className="col-12"
            color="red"
            size="medium"
            onClick={this.props.onRangePriceFilter}
            radius="radius16">
            <span className="fontWeight-700">اعمال محدوده قیمت</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default SearchPriceRangeDesktop;
