import React from "react";
import "../../src/Resources/css/main.sass";
import App, { AppContext, AppInitialProps } from "next/app";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import { wrapper } from "../../src/Share/Store/store";
import { AppWithStore } from "./types";
import LayoutContainer from "../../src/Modules/Layout/Container";
import { ILayouts } from "../../src/infrastructure/Models/Theme/ILayouts";
import getDeviceTypeWithUser from "../../utils/getDeviceTypeWithUser";
import { DeviceTypes } from "../../src/infrastructure/Models/Theme/IDeviceTypes";
import LayoutProfile from "../../src/Modules/LayoutProfile/LayoutProfile";
import GlobalData from "../../src/infrastructure/Global/GlobalData";
import { appWithTranslation } from "../../src/Language/i18n";
import { SSRTokenUtil } from "../../src/Share/Services/SSRTokens";
import { initSentry } from "../../utils/sentry";

/**
 * sentry sdk initialize
 */
initSentry();

const TopProgressBar = dynamic(
  () => {
    return import("../../src/Share/Components/Common/PageLoading/PageLoading");
  },
  { ssr: false },
);
// const WebApp = ({ Component, pageProps }: AppProps) => {
//
// static async getInitialProps({
//     Component,
//     ctx,
//   }: AppContext): Promise<AppInitialProps> {
//     const pageProps = Component.getInitialProps
//       ? await Component.getInitialProps(ctx)
//       : {};
//
//     return {
//       pageProps,
//     };
//   }
//
//   return (
//     <>
//       {pageProps.Layout === ILayouts.WEBSITE ? (
//         <LayoutContainer>
//           <Component {...pageProps} />
//         </LayoutContainer>
//       ) : (
//         <Component {...pageProps} />
//       )}
//     </>
//   );
// };

class WebApp extends App<AppWithStore> {
  static async getInitialProps({
    Component,
    ctx,
  }: AppContext): Promise<AppInitialProps> {
    // handle tokens refresh,new guest tokens
    const SSRTokensUtilIns = new SSRTokenUtil(ctx);
    await SSRTokensUtilIns.handle();
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    let isMobile: boolean | null = null;
    if (ctx.req) {
      isMobile = getDeviceTypeWithUser(ctx.req) === DeviceTypes.Mobile;
    }
    return {
      pageProps: {
        ...pageProps,
        isMobile,
      },
    };
  }

  renderPage = () => {
    const { Component, pageProps, err } = this.props;
    let isMobile;
    if (pageProps.isMobile !== null) {
      isMobile = pageProps.isMobile;
      GlobalData.setAgent(isMobile ? "mobile" : "desktop");
    }
    switch (pageProps.Layout) {
      case ILayouts.WEBSITE:
        return (
          <LayoutContainer>
            <Component {...pageProps} err={err} />
          </LayoutContainer>
        );
      case ILayouts.PROFILE:
        return (
          <LayoutContainer>
            <LayoutProfile>
              <Component {...pageProps} err={err} />
            </LayoutProfile>
          </LayoutContainer>
        );
      default:
        return <Component {...pageProps} />;
    }
  };

  render() {
    return (
      <>
        <TopProgressBar />
        {this.renderPage()}
        <ToastContainer position="top-right" rtl limit={3} />
      </>
    );
  }
}

// appWithTranslation for i18n
export default wrapper.withRedux(appWithTranslation(WebApp));
