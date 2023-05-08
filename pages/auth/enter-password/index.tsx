import { NextPageContext } from "next/dist/next-server/lib/utils";
import React, { Component } from "react";
import { ILayouts } from "../../../src/infrastructure/Models/Theme/ILayouts";
import EnterPasswordPageContainer from "../../../src/Modules/Auth/EnterPassword/Container";
import { LINKS } from "../../../src/Share/Constants/LINKS";

class Index extends Component {
  static getInitialProps(ctx: NextPageContext) {
    if (!ctx?.query?.mobile) {
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
    return <EnterPasswordPageContainer />;
  }
}

export default Index;
