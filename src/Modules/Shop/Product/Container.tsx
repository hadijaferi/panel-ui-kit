import dynamic from "next/dynamic";
import React from "react";
import BaseResponsive from "../../../infrastructure/BaseComponents/BaseResponsive";
import { IShopPageProps } from "../Models/IShopPageProps";

const Mobile = dynamic(() => import("./Mobile/Mobile"));
const Desktop = dynamic(() => import("./Desktop/Desktop"));
export default function ShopProductContainer(props: IShopPageProps) {
  return (
    <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
      {(ProductShop: any) => <ProductShop {...props} />}
    </BaseResponsive>
  );
}
