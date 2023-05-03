import React from "react";
import style from "./Rating.module.sass";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import {RatedIco} from "@/src/Resources/icon";

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

const  Rating =(props:IRatingProps)=>  {
    return (
      <div
        className={generateClassName([
          style.starStep,
          props.justShow && style.justShow,
          props.size && style[`${props.size}`],
          props.className,
        ])}>
        {[...new Array(5)].map((_x, index) => (
          <div
            key={`rating${index}`}
            className={generateClassName([
              style.item,
              props.rate > index && style.active,
            ])}
            onClick={() => {
              if (props.onChange) {
                props.onChange(index + 1);
              }
            }}>
              <RatedIco/>
          </div>
        ))}
      </div>
    );

}

export default Rating;
