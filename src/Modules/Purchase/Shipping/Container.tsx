import React, { Component } from "react";
import HeaderContainer from "./Components/Header/Container";
import OrderDeliveryAddressContainer from "./Components/OrderDeliveryAddress/Container";
import ShipmentsContainer from "./Components/Shipments/Container";
import OrderSummaryContainer from "../../../Share/Components/Purchase/OrderSummary/Container";

class ShippingContainer extends Component {
  render() {
    return (
      <>
        <HeaderContainer />
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div>
                <OrderDeliveryAddressContainer />
                <ShipmentsContainer />
              </div>
              <br />
            </div>
            <div className="col-3 p-t-40 m-t-8">
              <OrderSummaryContainer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShippingContainer;
