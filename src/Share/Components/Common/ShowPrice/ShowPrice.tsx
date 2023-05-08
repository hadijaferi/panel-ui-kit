import React, { Component, ReactNode } from "react";
import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";
import style from "./ShowPrice.module.sass";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import Price from "../Price/Price";

type priceStyleSize = "small";

interface IPriceProps extends IBaseComponentProps {
  price?: number;
  oldPrice?: number;
  size?: priceStyleSize;
}

class ShowPrice extends Component<IPriceProps> {
  discountPercent = () => {
    const { price = 0, oldPrice = 0 } = this.props;
    if (price >= oldPrice) {
      return 0;
    }
    return Math.floor(100 - (price * 100) / oldPrice);
  };

  render(): ReactNode {
    const { price = 0, oldPrice = 0 } = this.props;
    const discountPercent = this.discountPercent();
    return (
      <>
        {oldPrice && oldPrice !== price ? (
          <div className="text-center">
            {discountPercent !== 0 ? (
              <div className={style.acDiscountPercent}>
                <div className="m-t-2">
                  {discountPercent}
                  <small>%</small>
                </div>
              </div>
            ) : null}
            <Price
              price={oldPrice}
              mode="discount"
              showCurrency={false}
              className="fontSize-18 colorGray-979797"
            />
          </div>
        ) : null}
        <div
          className={generateClassName([
            "fontWeight-700 colorRed m-r-16",
            this.props.size === "small" ? "fontSize-24" : "fontSize-32",
          ])}>
          <Price price={price} showCurrency={this.props.size !== "small"} />
          {this.props.size === "small" ? (
            <div
              className="m-r-4 fontWeight-400 colorRed fontSize-16 text-right"
              style={{ marginTop: "-10px" }}>
              تومان
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

export default ShowPrice;
