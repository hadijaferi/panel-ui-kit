import React from "react";
import style from "./CircleStepper.module.sass";

export interface ICircleStepperProps {
  labels: string[];
  range: number;
}
export default function CircleStepper(props: ICircleStepperProps) {
  return (
    <ul className={style.cartUnitStepper}>
      {props.labels.map((item, index) => (
        <li
          key={index}
          className={index + 1 <= props.range ? style.active : ""}>
          {item}
        </li>
      ))}
    </ul>
  );
}
