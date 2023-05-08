import React, { Component } from "react";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import style from "./LoadingSpin.module.sass";
import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";

type ILoadingTheme = "white" | "gray" | "black";
type ILoadingSize = "small" | "medium" | "large";

interface ILoadingSpinProps extends IBaseComponentProps {
  theme?: ILoadingTheme;
  size?: ILoadingSize;
}

class LoadingSpin extends Component<ILoadingSpinProps> {
  public static defaultProps: ILoadingSpinProps = {
    size: "small",
    theme: "gray",
  };

  render() {
    return (
      <div
        className={generateClassName([
          style.acLoadingSpin,
          style[`acTheme-${this.props.theme}`],
          style[`acSize-${this.props.size}`],
          this.props.className,
        ])}
      />
    );
  }
}

export default LoadingSpin;
