import React, { Component } from "react";
import { ILayouts } from "../../src/infrastructure/Models/Theme/ILayouts";

class Index extends Component<any, any> {
  static getInitialProps() {
    return {
      Layout: ILayouts.WEBSITE,
    };
  }

  render() {
    return (<div>
      payment
    </div>);
  }
}

export default Index;
