import React, {Component, CSSProperties} from "react";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import style from "./LoadingSpin.module.sass";

type ILoadingTheme = "white" | "gray" | "black";
type ILoadingSize = "small" | "medium" | "large";

interface ILoadingSpinProps  {
  theme?: ILoadingTheme;
  size?: ILoadingSize;
    className?: string;
    style?: CSSProperties;
    children?: any;
}

const LoadingSpin=(props:ILoadingSpinProps)=> {
  // public static defaultProps: ILoadingSpinProps = {
  //   size: "small",
  //   theme: "gray",
  // };

    return (
      <div
        className={generateClassName([
          style.LoadingSpin,
          style[`Theme-${props.theme}`],
          style[`Size-${props.size}`],
          props.className,
        ])}
      />
    );
  }


export default LoadingSpin;
