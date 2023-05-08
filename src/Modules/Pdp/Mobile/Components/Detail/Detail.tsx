import React from "react";
import DetailInfoMobile from "./Components/Info/DetailInfoMobile";
import SelectCombinationMobile from "./Components/SelectCombination/SelectCombination";
import PdpMieterInfoMobile from "./Components/MieterInfo/MieterInfo";
import ShippingMobile from "./Components/Shipping/Shipping";

export default function PdpDetailMobile() {
  return (
    <>
      <div className="m-b-16">
        <DetailInfoMobile />
      </div>
      <div className="m-b-16">
        <SelectCombinationMobile />
      </div>
      <div className="m-b-16">
        <PdpMieterInfoMobile />
      </div>
      <div className="m-b-16">
        <ShippingMobile />
      </div>
    </>
  );
}
