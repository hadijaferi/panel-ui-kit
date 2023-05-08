import React, { PureComponent, ReactNode } from "react";

import iconStyle from "./Icon.module.sass";
import { iconTypes } from "./IIconTypes.ts";
import generateClassName from "../../../Helpers/Dom/generateClassName";

export type iconSize =
  | "dot"
  | "mini"
  | "small"
  | "medium"
  | "large"
  | "largest";

interface IIconProps {
  name: iconTypes;
  size?: iconSize;
  className?: string;
  style?: string;
}

class Icon extends PureComponent<IIconProps> {
  render(): ReactNode {
    return (
      <i
        className={generateClassName([
          iconStyle.icon,
          iconStyle[`i-${this.props.name}`],
          this.props.size && iconStyle[this.props.size],
          this.props.className,
          "acIcon",
        ])}
        style={this.props?.style || ({} as any)}
      />
    );
  }
}

export default Icon;
