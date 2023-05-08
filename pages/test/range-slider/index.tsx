import React, { Component } from "react";
import RangeSlider from "../../../src/Share/Components/Common/RangeSlider/RangeSlider";

interface ITestState {
  values: number[];
}

export default class Index extends Component<{}, ITestState> {
  state: ITestState = {
    values: [10000, 1000000],
  };

  render() {
    return (
      <div>
        <div className="container">
          <RangeSlider
            values={this.state.values}
            step={10000}
            min={10000}
            max={10000000}
            onChange={value => {
              this.setState({ values: value });
            }}
          />
        </div>
      </div>
    );
  }
}
