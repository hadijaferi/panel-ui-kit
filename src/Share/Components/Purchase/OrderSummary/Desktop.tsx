import React, { Component } from "react";
import Button from "../../Common/Button/Button";
import Price from "../../Common/Price/Price";
import style from "./Desktop.module.sass";
import OrderSummaryContainerProps from "./Models/OrderSummaryContainerProps";

export default class Desktop extends Component<OrderSummaryContainerProps> {
  render() {
    return (
      <div className={style.shortView}>
        <div className="card p-24">
          <ul>
            <li className="d-flex flex-x-between fontSize-16 flex-y-center">
              <div>
                {" "}
                مجموع قیمت کالاها ({this.props.itemsCount}
                مورد)
              </div>
              <div>
                <Price
                  price={this.props.orderSummaryDetails?.OrderTotal ?? 0}
                  showCurrency={false}
                  className="fontWeight-700"
                />{" "}
                تومان
              </div>
            </li>
            <li className="d-flex flex-x-between fontSize-16 flex-y-center">
              <div>تخفیف کالاها</div>
              <div className="colorRed">
                <Price
                  price={this.props.orderSummaryDetails?.SubTotalDiscount ?? 0}
                  showCurrency={false}
                  className="fontWeight-700"
                />{" "}
                تومان
              </div>
            </li>
          </ul>
          <hr className="m-t-32 m-b-24" />
          <div className="d-flex flex-x-between fontSize-16 flex-y-center">
            <div>تخفیف کالاها</div>
            <div>
              <Price
                price={this.props.orderSummaryDetails?.OrderTotalDiscount ?? 0}
                showCurrency={false}
                className="fontWeight-700 fontSize-24"
              />{" "}
              تومان
            </div>
          </div>
          <p className="m-t-16 colorGray-979797">
            هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی
            شما‌محاسبه و به این مبلغ اضافه خواهد شد
          </p>
        </div>
        <Button
          color="red"
          size="medium"
          className="col-12 m-t-16"
          radius="radius16">
          <span className="fontWeight-700 fontSize-20">ادامه مراحل خرید</span>
        </Button>
      </div>
    );
  }
}
