import React from "react";
import dynamic from "next/dynamic";
import { IShopPageProps } from "./Models/IShopPageProps";
import { IShopContext } from "./Models/IShopContext";
import { VITRIN_PAGES } from "./Constants/VitrinLinks";

const Product = dynamic(() => import("./Product/Container"));
const Service = dynamic(() => import("./Service/Container"));
export const ShopContext = React.createContext<IShopContext>({
  vitrinType: "product",
  pageName: VITRIN_PAGES.VITRIN,
});

export default function ShopContainer(props: IShopPageProps) {
  return (
    <>
      <ShopContext.Provider
        value={{
          vitrinType: props.vitrinType,
          pageName: props.pageName,
          vitrinBase: props.vitrinBase,
        }}>
        {props.vitrinType === "product" ? (
          <Product {...props} />
        ) : (
          <Service {...props} />
        )}
      </ShopContext.Provider>
    </>
  );
}
