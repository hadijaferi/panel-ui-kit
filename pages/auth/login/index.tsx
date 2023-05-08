import React, { Component } from "react";
import LoginPageContainer from "../../../src/Modules/Auth/Login/Container";
import { ILayouts } from "../../../src/infrastructure/Models/Theme/ILayouts";

class Index extends Component {
  static getInitialProps() {
    return {
      Layout: ILayouts.DEFAULT,
    };
  }

  render() {
    return <LoginPageContainer />;
  }
}

export default Index;
