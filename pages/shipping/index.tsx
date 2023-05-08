import React, { Component } from "react";
import { ILayouts } from "../../src/infrastructure/Models/Theme/ILayouts";
import ShippingContainer from "../../src/Modules/Purchase/Shipping/Container";

class Index extends Component<any, any> {
  static getInitialProps() {
    return {
      Layout: ILayouts.WEBSITE,
    };
  }

  render() {
    return (
      <div>
        <ShippingContainer />
      </div>
    );
  }
}

export default Index;
