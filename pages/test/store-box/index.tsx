import React, { Component } from "react";
import Icon from "../../../src/Share/Components/Common/Icon/Icon";

export default class Index extends Component {
  render() {
    return (
      <>
        <div className="alert alert__yellow">
          <Icon name="m-danger" />
          <span>
            مرسوله شماره 3 سنگین وزن/بزرگ میباشد که توسط باربری تحویل داده میشود
            . هزینه ارسال باربری رایگان نمی باشد و حمل تا طبقه 3 آدرس تحویل
            سفارش انجام میگیرد .
          </span>
        </div>
      </>
    );
  }
}
