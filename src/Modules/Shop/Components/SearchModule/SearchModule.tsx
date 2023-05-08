import React from "react";
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from "next/router";
import Product from "../../../Search/Desktop/Desktop";
import useGetShop from "../../Hooks/useGetShop";
// import useGetShop from "../../Hooks/useGetShop";

type ISearchContainerProps = WithRouterProps;
const SearchContainer = (props: ISearchContainerProps) => {
  const shopCtx = useGetShop();
  const VendorId = shopCtx.vitrinBase?.VendorId;
  return (
    <div>
      {/* <Product csrRequest {...props} queryParameters={{ MieterId: VendorId }} /> */}
      <Product
        csrRequest
        {...props}
        queryParameters={{ MieterId: VendorId }}
        hasBreadcrumb={false}
      />
    </div>
  );
};

export default withRouter(SearchContainer);
