import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";
import BaseResponsive from "../../../infrastructure/BaseComponents/BaseResponsive";
import { IShopPageProps } from "../Models/IShopPageProps";

const Mobile = dynamic(() => import("./Mobile/Mobile"));
const Desktop = dynamic(() => import("./Desktop/Desktop"));
export default function ShopProductContainer(props: IShopPageProps) {
  const shopName = props.vitrinBase?.StoreName;
  return (
    <>
      <Head>
        <title>{shopName} | پاساژ آنلاین آدرس کلیک</title>
        {props.vitrinType === "service" ? (
          <meta
            name="description"
            content={`مقایسه قیمت و ویژگی خدمات ارائه شده توسط ${shopName}. گفتگو با ارائه دهنده خدمت در آدرس کلیک`}
          />
        ) : (
          <meta
            name="description"
            content={`مقایسه قیمت کالاهای فروشگاه ${shopName}. انتخاب راحت از میان هزاران دسته‌بندی کالا در فروشگاه ${shopName}  در  آدرس کلیک`}
          />
        )}
      </Head>
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(ServiceShop: any) => <ServiceShop {...props} />}
      </BaseResponsive>
    </>
  );
}
