import React, { Component, ReactNode } from "react";
import style from "./Rating.module.sass";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import Icon from "../Icon/Icon";

type starSize = "small" | "medium" | "large";

interface IRatingProps {
  rate: number;
  size?: starSize;
  justShow?: boolean;
  className?: string;
  squareIcon?: boolean;
  onChange?: (rate: number) => void;
  name?: string;
}

class Rating extends Component<IRatingProps> {
  render(): ReactNode {
    return (
      <div
        className={generateClassName([
          style.starStep,
          this.props.justShow && style.justShow,
          this.props.size && style[`${this.props.size}`],
          this.props.className,
        ])}>
        {[...new Array(5)].map((_x, index) => (
          <div
            key={`rating${index}`}
            className={generateClassName([
              style.item,
              this.props.rate > index && style.active,
            ])}
            onClick={() => {
              if (this.props.onChange) {
                this.props.onChange(index + 1);
              }
            }}>
            <Icon name={this.props.squareIcon ? "star-squar" : "star-fill"} />
          </div>
        ))}
      </div>
    );
  }
}

export default Rating;
