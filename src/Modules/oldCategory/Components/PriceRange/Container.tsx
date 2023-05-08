import React, { Component } from "react";
import dynamic from "next/dynamic";
import BaseResponsive from "../../../../infrastructure/BaseComponents/BaseResponsive";
import { IPriceRangeContainerProps } from "./Models/IContainerProps";
import { IPriceRangeProps } from "./Models/IPriceRangeProps";
import { IPriceRangeContainerState } from "./Models/IContainerState";

// import dynamic pages
const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));

class SearchPriceRangeContainer extends Component<
  IPriceRangeContainerProps,
  IPriceRangeContainerState
> {
  state: IPriceRangeContainerState = {
    value: [
      this.props.from,
      this.props.to ? this.props.to : this.props.highestPrice,
    ],
  };

  onRangePriceChange = (value: number[]) => {
    this.setState({ value });
  };

  onRangePriceFilter = () => {
    const from = this.state.value[0] || 0;
    const to = this.state.value[1] || 0;
    this.props.onRangePriceFilter(from, to);
  };

  returnProps = (): IPriceRangeProps => {
    return {
      highestPrice: this.props.highestPrice,
      value: this.state.value,
      onRangePriceChange: this.onRangePriceChange,
      onRangePriceFilter: this.onRangePriceFilter,
    };
  };

  render() {
    return (
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(Sample: any) => <Sample {...this.returnProps()} />}
      </BaseResponsive>
    );
  }
}

export default SearchPriceRangeContainer;
