import React, { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import style from "../../../../../pages/test/cart/cart.module.sass";
import Button from "../../../../Share/Components/Common/Button/Button";
import StockQuantity from "../../../../Share/Components/Common/StockQunatity/StockQuantity";
import IPurchaseCartProps from "../Models/IPurchaseCartProps";
import IShoppingMieter from "../../../../Share/Models/ShoppingCart/Entity/IShoppingMieter";
import IShoppingCartItem from "../../../../Share/Models/ShoppingCart/Entity/IShoppingCartItem";
import LoadingSpin from "../../../../Share/Components/Common/LoadingSpin/LoadingSpin";
import loadingPhoto from "../../../../Resources/image/defaultStore.jpg";
import Icon from "../../../../Share/Components/Common/Icon/Icon";
import Price from "../../../../Share/Components/Common/Price/Price";

export default class Desktop extends Component<IPurchaseCartProps> {
  renderNoItem = () => {
    return <div>no item!</div>;
  };

  renderMieterHead = (mieter: IShoppingMieter) => {
    return (
      <div className="d-flex flex-y-center m-b-16">
        <div
          className="avatar avatar__small m-l-4"
          style={{ backgroundImage: `url(${mieter?.Picture?.ThumbUrl})` }}
        />
        <div>
          <div className="fontWeight-700 fontSize-16">{mieter?.Name}</div>
          <div className="fontSize-12">{mieter.Name}</div>
        </div>
      </div>
    );
  };

  renderItemQuantity = (item: IShoppingCartItem) => {
    return (
      <div className="text-center">
        <StockQuantity
          value={item.Quantity}
          min={1}
          max={10}
          loading={this.props.isLoadingItemQuantity(item.Id)}
          onChange={count => {
            this.props.updateItemQuantity(item.Id, item.Product.Id, count);
          }}
        />
      </div>
    );
  };

  renderDeleteItem = (cartItemId: number) => {
    return (
      <div className="m-r-8">
        {this.props.isLoadingItemDeleting(cartItemId) ? (
          <LoadingSpin />
        ) : (
          <Button
            theme="iconic"
            onClick={() => this.props.deleteItem(cartItemId)}>
            <Icon name="delete" size="large" />
          </Button>
        )}
      </div>
    );
  };

  renderCartItemsLoading = () => {
    return (
      <>
        <div className="m-b-16">
          <div className="d-flex flex-y-center m-b-16">
            <SkeletonTheme color="#e6e6e6">
              <Skeleton width={56} height={56} circle className="m-l-4" />
            </SkeletonTheme>
            <div>
              <div>
                <SkeletonTheme color="#e6e6e6">
                  <Skeleton width={181} height={20} className="m-l-4" />
                </SkeletonTheme>
              </div>
              <SkeletonTheme color="#e6e6e6">
                <Skeleton width={40} height={12} className="m-l-4" />
              </SkeletonTheme>
            </div>
          </div>
          <div className="card p-24">
            <div className={style.cartStep}>
              <li className={style.cartItem}>
                <div className={style.cartPic}>
                  <img src={loadingPhoto} alt="" />
                </div>
                <div className="d-flex flex-y-end flex-x-between">
                  <div>
                    <div className="m-b-16">
                      <Skeleton width={410} height={20} />
                    </div>
                    <div className="m-b-8">
                      <Skeleton width={60} height={12} />
                    </div>
                    <div className="m-b-8">
                      <Skeleton width={120} height={12} />
                    </div>
                    <div className="m-b-8">
                      <Skeleton width={120} height={12} />
                    </div>
                    <div>
                      <Skeleton width={140} height={30} />
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-y-center">
                      <Skeleton width={65} height={18} className="m-l-4" />
                      <span className="fontWeight-700 fontSize-20 m-t-4">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex flex-y-center m-b-16">
            <SkeletonTheme color="#e6e6e6">
              <Skeleton width={56} height={56} circle className="m-l-4" />
            </SkeletonTheme>
            <div>
              <div>
                <SkeletonTheme color="#e6e6e6">
                  <Skeleton width={181} height={20} className="m-l-4" />
                </SkeletonTheme>
              </div>
              <SkeletonTheme color="#e6e6e6">
                <Skeleton width={40} height={12} className="m-l-4" />
              </SkeletonTheme>
            </div>
          </div>
          <div className="card p-24">
            <div className={style.cartStep}>
              <li className={style.cartItem}>
                <div className={style.cartPic}>
                  <img src={loadingPhoto} alt="" />
                </div>
                <div className="d-flex flex-y-end flex-x-between">
                  <div>
                    <div className="m-b-16">
                      <Skeleton width={410} height={20} />
                    </div>
                    <div className="m-b-8">
                      <Skeleton width={60} height={12} />
                    </div>
                    <div className="m-b-8">
                      <Skeleton width={120} height={12} />
                    </div>
                    <div className="m-b-8">
                      <Skeleton width={120} height={12} />
                    </div>
                    <div>
                      <Skeleton width={140} height={30} />
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-y-center">
                      <Skeleton width={65} height={18} className="m-l-4" />
                      <span className="fontWeight-700 fontSize-20 m-t-4">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </>
    );
  };

  renderCartItem = (item: IShoppingCartItem) => {
    return (
      <li className={style.cartItem}>
        <div className={style.cartPic}>
          <img src={item.Product.Picture?.ThumbUrl} alt="" />
        </div>
        <div className="d-flex flex-y-end flex-x-between">
          <div>
            <div className="fontSize-16 fontWeight-700 m-b-16">
              {item.Product.Name}
            </div>
            <div className="fontSize-12 m-b-8 tag_color d-flex flex-y-center">
              <span
                className="tag_color__icon"
                style={{ backgroundColor: "#ffc000" }}
              />
              زرد
            </div>
            <div className="fontSize-12 m-b-8">city | unknown</div>
            <div className="fontSize-12 m-b-8">ارسال توسط فروشنده</div>

            <div className="d-flex flex-y-center">
              {this.renderItemQuantity(item)}
              {this.renderDeleteItem(item.Id)}
            </div>
          </div>
          <div>
            {item.Product.OldPrice !== 0 && (
              <div>
                <Price
                  price={item.Product.OldPrice}
                  className="colorRed fontSize-18"
                  showCurrency={false}
                  mode="discount"
                />
              </div>
            )}
            <div>
              <Price
                price={item.Product.Price}
                className="fontSize-20 fontWeight-700"
              />
            </div>
          </div>
        </div>
      </li>
    );
  };

  isLoadingCartItems = () => {
    return (
      this.props.deletingCartItems.length === 0 &&
      this.props.updatingItemsQuantity.length === 0 &&
      this.props.isLoadingCartItems
    );
  };

  renderItems = () => {
    if (this.props.shoppingCarts.length > 0) {
      return (
        <ul>
          {this.props.shoppingCarts.map(shop => {
            return (
              <>
                {this.renderMieterHead(shop.Mieter)}
                <li className="m-b-24">
                  <div className="card p-24">
                    {shop?.Items.map(item => {
                      return (
                        <ul className={style.cartStep}>
                          {this.renderCartItem(item)}
                        </ul>
                      );
                    })}
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      );
    }
    return this.renderNoItem();
  };

  render() {
    return (
      <div>
        {this.isLoadingCartItems() && this.renderCartItemsLoading()}
        {!this.isLoadingCartItems() && this.renderItems()}
      </div>
    );
  }
}
