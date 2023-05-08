import React, { Component } from "react";
import { NextPageContext } from "next/dist/next-server/lib/utils";
import { ILayouts } from "../../../src/infrastructure/Models/Theme/ILayouts";
import RegisterPageContainer from "../../../src/Modules/Auth/Register/Container";
import { LINKS } from "../../../src/Share/Constants/LINKS";

class Index extends Component {
  static getInitialProps(ctx: NextPageContext) {
    if (!ctx?.query?.token) {
      ctx.res?.writeHead(301, {
        location: LINKS.AUTH.LOGIN,
      });
      ctx.res?.end();
    }
    return {
      Layout: ILayouts.DEFAULT,
    };
  }

  render() {
    return <RegisterPageContainer />;
  }
}

export default Index;
