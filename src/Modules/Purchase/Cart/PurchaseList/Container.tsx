import React, { Component } from "react";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import BaseResponsive from "../../../../infrastructure/BaseComponents/BaseResponsive";
import { IRootState } from "../../../../Share/Store/Reducer";
import IPurchaseCartProps from "../Models/IPurchaseCartProps";
import {
  CartAddItem,
  CartChangeItemQuantity,
  CartDeleteItem,
  CartToggleDeleteItemModal,
  CartUpdateChangingQuantityItems,
  CartUpdateDeletingItems,
} from "../../../../Share/Store/Cart/actions";
import IResponse from "../../../../infrastructure/Models/HttpClient/IResponse";
import IShoppingCartChangeItem from "../../../../Share/Models/ShoppingCart/Entity/IShoppingCartChangeItem";
import IShoppingCartQuantityRequest from "../../../../Share/Models/ShoppingCart/IShoppingCartQuantityRequest";
// import dynamic pages
const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));
// redux
const mapStateToProps = (state: IRootState) => {
  return {
    shoppingCarts: state.cart.ShoppingCarts,
    updatingItemsQuantity: state.cart.updatingItemsQuantity,
    deletingCartItems: state.cart.deletingCartItems,

    isLoadingCartItems: state.cart.isLoadingShoppingCarts,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      CartUpdateChangingQuantityItems,
      CartDeleteItem,
      CartAddItem,
      CartChangeItemQuantity,
      CartUpdateDeletingItems,
      CartToggleDeleteItemModal,
    },
    dispatch,
  );
};

interface PurchaseContainerProps {
  CartDeleteItem: (id: number) => Promise<IResponse>;
  CartAddItem: (item: IShoppingCartChangeItem) => Promise<IResponse>;
  CartChangeItemQuantity: (
    body: IShoppingCartQuantityRequest,
  ) => Promise<IResponse>;
  CartToggleDeleteItemModal: (isOpen: boolean, id: number) => void;
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReturnType = typeof mapStateToProps;

class PurchaseContainer extends Component<
  IPurchaseCartProps & ReturnType & PurchaseContainerProps
> {
  // ACTIONS
  deleteItem = (cartItemId: number) => {
    this.props.CartToggleDeleteItemModal(true, cartItemId);

    /*    if (!this.props.deletingCartItems.includes(cartItemId)) {
      this.props.CartUpdateDeletingItems(
        this.props.deletingCartItems.concat(cartItemId),
      );
      this.props.CartDeleteItem(cartItemId).then(res => {
        if (res.data.IsSuccess) {
          this.props.CartUpdateDeletingItems(
            this.props.deletingCartItems.filter(Item => Item !== cartItemId),
          );
        }
      });
    } */
  };

  updateItemQuantity = (
    cartItemId: number,
    _productId: number,
    count: number,
  ) => {
    if (!this.props.updatingItemsQuantity.includes(cartItemId)) {
      this.props.CartUpdateChangingQuantityItems(
        this.props.updatingItemsQuantity.concat(cartItemId),
      );
      // delete Item ?
      if (count > 0) {
        this.props
          .CartChangeItemQuantity({
            Id: cartItemId,
            Quantity: count,
          })
          .then(res => {
            if (res.data.IsSuccess) {
              this.removeItemFromQuantityAction(cartItemId);
            }
          });
      } else if (count === 0) {
        this.props.CartDeleteItem(cartItemId).then(res => {
          if (res.data.IsSuccess) {
            this.removeItemFromQuantityAction(cartItemId);
          }
        });
      }
    }
  };

  removeItemFromQuantityAction = (id: number) => {
    this.props.CartUpdateChangingQuantityItems(
      this.props.updatingItemsQuantity.filter(item => item !== id),
    );
  };

  isLoadingItemQuantity = (id: number) => {
    return this.props.updatingItemsQuantity.includes(id);
  };

  isLoadingItemDeleting = (id: number) => {
    return this.props.deletingCartItems.includes(id);
  };

  helpers = () => {
    return {
      isLoadingItemQuantity: this.isLoadingItemQuantity,
      isLoadingItemDeleting: this.isLoadingItemDeleting,
      updateItemQuantity: this.updateItemQuantity,
      deleteItem: this.deleteItem,
    };
  };

  render() {
    return (
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(PurchaseList: any) => (
          <PurchaseList {...this.props} {...this.helpers()} />
        )}
      </BaseResponsive>
    );
  }
}

export default connector(PurchaseContainer as any);
