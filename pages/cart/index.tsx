import React, { Component } from "react";
import { ILayouts } from "../../src/infrastructure/Models/Theme/ILayouts";
import { CartContainer } from "../../src/Modules/Purchase/Cart/Container";
// import { intervals } from "../../src/infrastructure/HttpClient/test/interceptor";

class Index extends Component<any, any> {
  static getInitialProps() {
    return {
      Layout: ILayouts.WEBSITE,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      // intervals();
    }, 2000);
  }

  render() {
    return (
      <div>
        <CartContainer />
      </div>
    );
  }
}

export default Index;
