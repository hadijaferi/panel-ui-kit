import { GetServerSidePropsContext } from "next";
import React from "react";
import ShopContainer from "../../src/Modules/Shop/Container";
import { ILayouts } from "../../src/infrastructure/Models/Theme/ILayouts";
import { IShopPageProps } from "../../src/Modules/Shop/Models/IShopPageProps";
import {
  IVitrinPageTypes,
  VITRIN_PAGES,
} from "../../src/Modules/Shop/Constants/VitrinLinks";
import Vitrin from "../../src/Modules/Shop/Services/Vitrin";
import { IVitrinBaseResponse } from "../../src/Modules/Shop/Models/IVitrinBaseResponse";
import { LINKS } from "../../src/Share/Constants/LINKS";

const ShopPage = (props: IShopPageProps) => {
  return <ShopContainer {...props} />;
};

ShopPage.getInitialProps = async (
  ctx: GetServerSidePropsContext,
): Promise<IShopPageProps> => {
  const username = ctx.query.username as string;
  let page = ctx.query.q as IVitrinPageTypes;
  page = Object.values(VITRIN_PAGES).includes(page)
    ? page
    : VITRIN_PAGES.VITRIN;
  let vitrinType = "service";
  let vitrinBase: IVitrinBaseResponse | null = null;

  // set data from cache if in client side
  // this block not work when :  ( username change , request processing in ssr )
  let oldData = null;
  if (
    process.browser &&
    typeof window !== "undefined" &&
    window?.__NEXT_DATA__.props.initialProps?.pageProps?.vitrinBase
  ) {
    const oldVitrinData: IShopPageProps =
      window?.__NEXT_DATA__.props.initialProps?.pageProps;
    if (oldVitrinData.username === username) {
      oldData = oldVitrinData;
    }
  }
  if (oldData) {
    return {
      ...oldData,
      pageName: page,
    };
  }

  // load vitrin base data from server if oldData not available or request is in ssr mode
  if (ctx.req || oldData === null) {
    await Vitrin.getVitrinBase({
      StoreUrl: username,
    }).then(res => {
      if (res.data.IsSuccess && res.data.Data) {
        vitrinBase = res.data.Data;
        vitrinType = res.data.Data.VitrinType === 1 ? "product" : "service";
      } else {
        ctx.res
          ?.writeHead(302, {
            location: LINKS.NOT_FOUND,
          })
          .end();
      }
    });
  }

  // load pdp , slp data
  return {
    username,
    pageName: page,
    vitrinBase: vitrinBase as any,
    vitrinType: vitrinType as any,
    Layout: ILayouts.WEBSITE,
  };
};
export default ShopPage;
