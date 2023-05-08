import React, { Component } from "react";
import { NextPageContext } from "next/dist/next-server/lib/utils";
import { ILayouts } from "../../../src/infrastructure/Models/Theme/ILayouts";
import OtpValidationPageContainer from "../../../src/Modules/Auth/OtpValidation/Container";
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
    return <OtpValidationPageContainer />;
  }
}

export default Index;
