import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Skeleton from "react-loading-skeleton";
import style from "./Desktop.module.sass";
import generateClassName from "../../../../../../Share/Helpers/Dom/generateClassName";
import ButtonLink from "../../../../../../Share/Components/Common/Button/ButtonLink";
import Button from "../../../../../../Share/Components/Common/Button/Button";
import { IRootState } from "../../../../../../Share/Store/Reducer";
import IShoppingCartItem from "../../../../../../Share/Models/ShoppingCart/Entity/IShoppingCartItem";
import formatNumberToPrice from "../../../../../../Share/Helpers/formatNumberToPrice";
import {
  CartDeleteItem,
  CartToggleDeleteItemModal,
  CartUpdateDeletingItems,
} from "../../../../../../Share/Store/Cart/actions";
import IResponse from "../../../../../../infrastructure/Models/HttpClient/IResponse";
import productCartDefault from "../../../../../../Resources/image/defaultProductStore.jpg";
import LoadingSpin from "../../../../../../Share/Components/Common/LoadingSpin/LoadingSpin";
import Icon from "../../../../../../Share/Components/Common/Icon/Icon";

const mapStateToProps = (state: IRootState) => {
  return {
    items: state.cart.ShoppingCarts,
    deletingItems: state.cart.deletingCartItems,
    updatingItemsQuantity: state.cart.updatingItemsQuantity,

    isLoadingItems: state.cart.isLoadingShoppingCarts,
    isLoadingOrderSummary: state.cart.isLoadingOrderSummary,
    summary: state.cart.OrderSummary,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      CartDeleteItem,
      CartUpdateDeletingItems,
      CartToggleDeleteItemModal,
    },
    dispatch,
  );
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReturnType = ConnectedProps<typeof connector>;

interface CartListProps {
  CartDeleteItem: (id: number) => Promise<IResponse>;
}

class CartProductListContainer extends Component<CartListProps & ReturnType> {
  isLoadingCartList = () => {
    return (
      this.props.isLoadingItems &&
      this.props.deletingItems.length === 0 &&
      this.props.updatingItemsQuantity.length === 0
    );
  };

  joinAllCartItems = () => {
    let items: IShoppingCartItem[] = [];
    this.props.items.forEach(item => {
      items = items.concat(item.Items);
    });
    return items;
  };

  deleteItem = (id: number) => {
    this.props.CartToggleDeleteItemModal(true, id);
    /*
     const { deletingItems } = this.props;
      if (!deletingItems.includes(id)) {
      this.props.CartUpdateDeletingItems(deletingItems.concat(id));
      this.props.CartDeleteItem(id).then(res => {
        if (res.data.IsSuccess) {
          this.props.CartUpdateDeletingItems(
            deletingItems.filter(Item => Item !== id),
          );
        }
      });
    } */
  };

  renderItem = (item: IShoppingCartItem) => {
    return (
      <div key={item.Id} className={style.item}>
        <div className={style.productPhoto}>
          <img src={item.Product.Picture.ThumbUrl} alt="" />
        </div>
        <div className={style.content}>
          <div className="d-flex flex-x-between">
            <div>
              <div className={style.titleParent}>
                <span>{item.Product.Name}</span>
              </div>
              <div className="fontSize-12 colorGray-979797">
                {item.Mieter?.Name}
              </div>
            </div>
            {this.deleteCartItem(item.Id)}
          </div>
          <div className="d-flex flex-y-center flex-x-between m-block-start">
            <div className="fontSize-12">{item.Quantity}</div>
            <span className="fontWeight-700">
              {item.Product.Price} <span>تومان</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  deleteCartItem = (id: number) => {
    return this.props.deletingItems.includes(id) ? (
      <div className="d-flex flex-over-center">
        <LoadingSpin />
      </div>
    ) : (
      <Button theme="iconic" onClick={() => this.deleteItem(id)}>
        <Icon name="delete" size="large" className="m-b-2" />
      </Button>
    );
  };

  renderItemsSkeleton = () => {
    return [...new Array(3)].map((_, i) => (
      <div key={i} className={style.item}>
        <div className={style.productPhoto}>
          <div
            style={{
              width: 83,
              height: 83,
            }}
            className="shine"
          />
          <img src={productCartDefault} alt="" />
        </div>
        <div className={style.content}>
          <div className="d-flex flex-x-between">
            <div>
              <div className={style.titleParent}>
                <Skeleton width={87} height={8} />
              </div>
              <Skeleton width={87} height={8} />
            </div>
            <Skeleton circle width={18} height={18} />
          </div>
          <div className="d-flex flex-y-center flex-x-between m-block-start">
            <Skeleton width={20} height={8} />
            <div className="d-flex flex-y-center">
              <Skeleton width={30} height={8} className="m-l-4" />
              <span className="m-b-4">تومان</span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  renderCartItemsBox = () => {
    return (
      <div className={generateClassName([style.acCartList, "card"])}>
        <div className={style.head}>
          <div className="m-t-2">
            {this.props.isLoadingOrderSummary ? (
              <Skeleton width={30} height={12} />
            ) : (
              this.joinAllCartItems().length
            )}
            <span className="m-r-4">کالا</span>
          </div>
          <ButtonLink href="/" color="blue">
            <span>مشاهده سبد خرید</span>
            <Icon name="chevron-left" className="m-r-4 m-b-2" size="mini" />
          </ButtonLink>
        </div>
        <div className="p-16">
          <div className={style.itemWrap}>
            {this.isLoadingCartList()
              ? this.renderItemsSkeleton()
              : this.joinAllCartItems().map(item => this.renderItem(item))}
          </div>
        </div>
        <div className="d-flex flex-y-center flex-x-between p-x-16">
          <div>
            <div className="fontSize-12">مبلغ قابل پرداخت</div>
            <span className="fontWeight-700">
              {this.props.isLoadingOrderSummary ? (
                <Skeleton height={12} width={44} />
              ) : (
                formatNumberToPrice(this.props.summary?.OrderTotal ?? 0)
              )}
              <span className="m-r-4">تومان</span>
            </span>
          </div>
          <div className="col-5">
            <Button color="red" size="medium" className="col-12">
              <span className=" fontWeight-700">ثبت سفارش</span>
            </Button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="pos-relative">
        <ButtonLink href="/" className={style.cartBtn}>
          <Icon name="bag-cart" size="largest" />
        </ButtonLink>
        {this.renderCartItemsBox()}
      </div>
    );
  }
}

export default connector(CartProductListContainer as any);
