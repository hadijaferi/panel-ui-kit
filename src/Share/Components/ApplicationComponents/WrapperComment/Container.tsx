import dynamic from "next/dynamic";
import React from "react";
import BaseResponsive from "../../../../infrastructure/BaseComponents/BaseResponsive";

const Mobile = dynamic(() => import("./Mobile/WrapperComment"));
const Desktop = dynamic(() => import("./Desktop/WrapperComment"));

export default function PdpContainer() {
  return (
    <>
      <BaseResponsive DesktopComponent={Desktop} MobileComponent={Mobile}>
        {(Wrapper: any) => <Wrapper />}
      </BaseResponsive>
    </>
  );
}
