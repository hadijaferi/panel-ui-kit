import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fa">
        <Head>
          {process.env.NODE_ENV !== "development" && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TRHB2NC');`,
              }}
            />
          )}
        </Head>
        <body>
          {process.env.NODE_ENV !== "development" && (
            <noscript>
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-TRHB2NC"
                height="0"
                width="0"
                style={{
                  display: "none",
                  visibility: "hidden",
                }}
              />
            </noscript>
          )}

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
