import React, { useState } from "react";
import RangeSlider from "../../../src/Share/Components/Common/RangeSlider/RangeSlider";

const Index = () => {
  const [values, setValues] = useState<number[]>([0, 10000]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <RangeSlider
        min={0}
        max={10000}
        values={values}
        onChange={value => setValues(value)}
        step={1}
        width={500}
      />
      <span>min-Value: {values[0]}</span>
      <span>max-Value: {values[1]}</span>
    </div>
  );
};

export default Index;
