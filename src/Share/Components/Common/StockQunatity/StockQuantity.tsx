import React, { Component, ReactNode } from "react";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import style from "./StockQuantity.module.sass";
import LoadingSpin from "../LoadingSpin/LoadingSpin";
import Icon from "../Icon/Icon";

interface StockQuantityProps {
  value: number;
  min: number;
  max: number;
  onChange: (count: number) => void;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default class StockQuantity extends Component<StockQuantityProps> {
  handleChange = (event: any) => {
    const { min, max } = event.target;
    const value = Math.max(
      Number(min),
      Math.min(Number(max), Number(event.target.value)),
    );

    this.props.onChange(value);
  };

  render() {
    return (
      <div className={style.quantity}>
        <div
          onClick={() => {
            if (this.props.value < this.props.max) {
              this.props.onChange(this.props.value + 1);
            }
          }}
          className={generateClassName([
            style.icon,
            this.props.value < this.props.max && !this.props.loading
              ? style.active
              : style.disable,
          ])}>
          {this.props.rightIcon ?? <Icon name="plus" />}
        </div>

        {this.props.loading ? (
          <div
            className={generateClassName([
              style.loading,
              "d-flex flex-over-center",
            ])}>
            <LoadingSpin />
          </div>
        ) : (
          <input
            min={this.props.min}
            max={this.props.max}
            type="number"
            value={this.props.value}
            onChange={this.handleChange}
            className="text-center"
          />
        )}
        <div
          onClick={() => {
            if (this.props.value > this.props.min) {
              this.props.onChange(this.props.value - 1);
            }
          }}
          className={generateClassName([
            style.icon,
            this.props.value > this.props.min && !this.props.loading
              ? style.active
              : style.disable,
          ])}>
          {this.props.leftIcon ?? <Icon name="dash" />}
        </div>
      </div>
    );
  }
}
