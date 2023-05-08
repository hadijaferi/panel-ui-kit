import React, { Component } from "react";
import Button from "../../../../../Share/Components/Common/Button/Button";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";

class OrderDeliveryAddressContainer extends Component {
  render() {
    return (
      <div className="m-b-24">
        <div className="fontSize-18 fontWeight-700 m-b-16">
          آدرس تحویل سفارش
        </div>
        <div className="card p-24 d-flex flex-x-between flex-y-center">
          <div>
            <div className="fontWeight-700 m-b-8">
              تهران ، میدان آزادی ، 3 دور دورش بچرخین ، بصورت وارونه اسم علیرضا
              رو 6 بار داد بزنید، واحد 2
            </div>
            <div className="d-flex">
              <div className="d-flex m-l-16">
                <span>تحویل گیرنده:</span>
                <span className="fontWeight-700">احسان عزتی</span>
              </div>
              <div className="d-flex m-l-16">
                <span>تلفن تماس:</span>
                <span className="fontWeight-700">09390706077</span>
              </div>
            </div>
          </div>
          <Button theme="text" color="blue" size="small">
            <div className="p-x-8">
              <Icon name="m-edit-square" size="large" className="m-l-8" />
              تغییر آدرس
            </div>
          </Button>
        </div>
      </div>
    );
  }
}

export default OrderDeliveryAddressContainer;
