import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";
import BaseResponsive from "../../infrastructure/BaseComponents/BaseResponsive";
import { usePdpProductDetails } from "./Hooks/usePdpProductId";

const Mobile = dynamic(() => import("./Mobile/Mobile"));
const Desktop = dynamic(() => import("./Desktop/Desktop"));

export default function PdpContainer() {
  const productDetails = usePdpProductDetails();
  const PrimaryImg = productDetails?.Pictures?.[0]?.Url;
  const description = productDetails?.Product.Description;
  const url = `https://addressclick.com/product/acp-${productDetails?.Product.Id}/${productDetails?.Product.SeoName}`;
  const productName = productDetails?.Product.Name;
  return (
    <>
      <Head>
        <title>{productDetails?.Product.Name}</title>
        <meta property="og:title" content={productName} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={PrimaryImg} />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:site_name" content="پاساژ آنلاین آدرس کلیک" />
        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={productName} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:image" content={PrimaryImg} />
        <meta name="robots" content="noindex" />
      </Head>
      <BaseResponsive DesktopComponent={Desktop} MobileComponent={Mobile}>
        {(Pdp: any) => <Pdp />}
      </BaseResponsive>
    </>
  );
}
