import React, { useRef } from "react";
import style from "./RangeSlider.module.sass";

interface IRangeSliderProps {
  readonly min: number;
  readonly max: number;
  step: number;
  width?: number;
  animate?: boolean;
  values: number[];
  onChange: (value: number[]) => any;
}

const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  animate,
  width,
  values,
  onChange,
}: IRangeSliderProps) => {
  const [minValue, maxValue] = values;
  const leftInputRef = useRef<HTMLInputElement>(null);
  const rightInputRef = useRef<HTMLInputElement>(null);
  const leftPos = `${((minValue - min) / (max - min)) * 100}%`;
  const rightPos = `${100 - ((maxValue - min) / (max - min)) * 100}%`;
  return (
    <div className={style.RangeSlider} style={width ? { width } : {}}>
      <input
        className={style.RangeSlider__TempInput}
        type="range"
        ref={leftInputRef}
        min={min}
        max={max}
        value={minValue}
        onChange={() => {
          if (
            leftInputRef.current &&
            rightInputRef.current &&
            +leftInputRef.current.value < maxValue
          ) {
            if (!(+leftInputRef.current.value % step)) {
              onChange([
                +leftInputRef.current.value,
                +rightInputRef.current.value,
              ]);
            }
          }
        }}
      />
      <input
        className={style.RangeSlider__TempInput}
        type="range"
        ref={rightInputRef}
        min={min}
        max={max}
        value={maxValue}
        onChange={() => {
          if (
            leftInputRef.current &&
            rightInputRef.current &&
            +rightInputRef.current.value > minValue
          ) {
            if (!(+rightInputRef.current.value % step)) {
              onChange([
                +leftInputRef.current.value,
                +rightInputRef.current.value,
              ]);
            }
          }
        }}
      />
      <div
        className={[
          style.RangeSlider__range,
          animate ? style.animate : null,
        ].join(" ")}
        style={{
          left: leftPos,
          right: rightPos,
        }}
      />
    </div>
  );
};

export default RangeSlider;
