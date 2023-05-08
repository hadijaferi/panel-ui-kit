import React, { Component } from "react";
import dynamic from "next/dynamic";
import BaseResponsive from "../../../../infrastructure/BaseComponents/BaseResponsive";

// import dynamic pages
const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));

export class HeaderContainer extends Component {
  render() {
    return (
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(Cart: any) => <Cart />}
      </BaseResponsive>
    );
  }
}
