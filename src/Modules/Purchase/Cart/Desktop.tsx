import React, { Component } from "react";
import OrderSummaryContainer from "../../../Share/Components/Purchase/OrderSummary/Container";
import { HeaderContainer } from "./Header/Container";
import PurchaseContainer from "./PurchaseList/Container";

export default class Desktop extends Component<any, any> {
  render() {
    return (
      <div>
        <HeaderContainer />

        {/* body */}
        <div className="container">
          <div className="row">
            <div className="col-9">
              <PurchaseContainer />
            </div>
            <div className="col-3 p-t-64 m-t-8">
              <OrderSummaryContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
