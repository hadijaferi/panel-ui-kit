import React, { Component } from "react";
import CircleStepper from "../../../../Share/Components/Common/CircleStepper/CircleStepper";
import style from "../Desktop.module.sass";
import Button from "../../../../Share/Components/Common/Button/Button";
import Icon from "../../../../Share/Components/Common/Icon/Icon";

export default class Desktop extends Component<any, any> {
  render() {
    return (
      <div className={style.cartUnit}>
        <div className="container">
          <div className="p-32 row flex-y-center">
            <div className="col-3">
              <Button theme="text">
                <div className="p-x-8">
                  <Icon name="right" size="mini" className="m-l-8" />
                  بازگشت
                </div>
              </Button>
            </div>
            <div className="col-6">
              <CircleStepper
                range={1}
                labels={[
                  "سبد خرید",
                  "اطلاعات وآدرس ارسال",
                  "پرداخت و اتمام خرید",
                ]}
              />
            </div>
            <div className="col-3" />
          </div>
        </div>
      </div>
    );
  }
}
