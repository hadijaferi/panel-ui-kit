import dynamic from "next/dynamic";
import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import BaseResponsive from "../../../../infrastructure/BaseComponents/BaseResponsive";
import { IRootState } from "../../../Store/Reducer";

const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));
const mapStateToProps = (state: IRootState) => {
  return {
    orderSummaryDetails: state.cart.OrderSummary,
    shoppingCarts: state.cart.ShoppingCarts,
  };
};

const connector = connect(mapStateToProps);

class OrderSummaryContainer extends Component<
  ConnectedProps<typeof connector>
> {
  getItemsCount = () => {
    let count = 0;
    for (let i = 0; i < this.props.shoppingCarts.length; i += 1) {
      count += this.props.shoppingCarts[i].Items.length;
    }
    return count;
  };

  helpers = () => {
    return {
      itemsCount: this.getItemsCount(),
    };
  };

  render() {
    return (
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(OrderSummary: any) => <OrderSummary {...this.props} {...this.helpers()} />}
      </BaseResponsive>
    );
  }
}

export default connector(OrderSummaryContainer);
