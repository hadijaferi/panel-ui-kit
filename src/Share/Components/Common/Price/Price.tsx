import React, { Component, ReactNode } from "react";
import priceStyle from "./Price.module.sass";

interface IPriceProps {
  price: number;
  mode?: "discount" | "real-price";
  showCurrency?: boolean;
  className?: string;
}

class Price extends Component<IPriceProps> {
  render(): ReactNode {
    const { mode = "real-price", price = 0, showCurrency = true } = this.props;
    return (
      <span className={`${priceStyle.acPrice} ${this.props?.className || ""}`}>
        {mode === "discount" && (
          <>
            <span className={priceStyle.discounted}>
              {price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </span>
            {showCurrency && <span className="ac-unit"> تومان </span>}
          </>
        )}
        {mode === "real-price" && (
          <>
            <span className={priceStyle.AcMainPrice}>
              {price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </span>
            {showCurrency && <span className="ac-unit"> تومان </span>}
          </>
        )}
      </span>
    );
  }
}

export default Price;
