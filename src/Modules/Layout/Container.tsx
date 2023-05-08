import React, { Component } from "react";
import dynamic from "next/dynamic";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import BaseResponsive from "../../infrastructure/BaseComponents/BaseResponsive";
import { CartLoadItems, CartLoadSummary } from "../../Share/Store/Cart/actions";
import DeleteCartItemContainer from "../../Share/Components/Purchase/DeleteCartItemModal/Container";

const Mobile = dynamic(() => import("./Mobile"), { ssr: false });
const Desktop = dynamic(() => import("./Desktop"), { ssr: false });
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      CartLoadItems,
      CartLoadSummary,
    },
    dispatch,
  );
};
const connector = connect(null, mapDispatchToProps);
type ReturnTypes = ConnectedProps<typeof connector>;

interface Props {
  children: any;
}

class LayoutContainer extends Component<ReturnTypes & Props, any> {
  componentDidMount() {
    // load cart
    // this.props.CartLoadItems();
    // this.props.CartLoadSummary();
  }

  render() {
    return (
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(Layout: any) => (
          <Layout>
            {/* global  components */}
            <DeleteCartItemContainer />

            {this.props.children}
          </Layout>
        )}
      </BaseResponsive>
    );
  }
}

export default connector(LayoutContainer);
