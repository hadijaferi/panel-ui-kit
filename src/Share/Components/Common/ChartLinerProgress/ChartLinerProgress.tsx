import React, { Component, ReactNode } from "react";
import Style from "./ChartLinerProgress.module.sass";
import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";

interface IChartLinerProgressProps extends IBaseComponentProps {
  point: number;
  count: number;
  title: ReactNode;
}

class ChartLinerProgress extends Component<IChartLinerProgressProps> {
  render() {
    return (
      <div className={this.props.className}>
        <div className="row flex-y-center">
          <div className="col-2">
            <div className={Style.Age}>{this.props.title}</div>
          </div>
          <div className="col-8">
            <div className={Style.parentBar}>
              <div
                className={Style.bar}
                style={{ width: `${this.props.point}%` }}
              />
            </div>
          </div>
          <div className="col-2">
            <div className={Style.count}>
              {this.props.count} ({Math.floor(this.props.point)} %)
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartLinerProgress;
