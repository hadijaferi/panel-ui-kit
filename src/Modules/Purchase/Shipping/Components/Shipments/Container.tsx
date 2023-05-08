import React, { Component } from "react";
import postImg from "../../../../../../pages/test/cart/img/post.png";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import style from "../Style.module.sass";
import PicturesContainer from "./Pictures/Container";
import TimingContainer from "./Timing/Container";

class ShipmentsContainer extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-x-between">
          <div className="fontSize-18 fontWeight-700 m-b-16">مرسوله ها</div>
          <div className="colorGray-5e5e5e">
            6 کالای شما در 3 مرسوله ارسال خواهد شد
          </div>
        </div>
        <div className="card p-24">
          <div className="row m-b-24">
            <div className="col-6">
              <div className={style.selector}>
                <img src={postImg} />
                <div>
                  <div className="fontWeight-700">ارسال پست</div>
                  <div>اولین زمان تحویل: 14 دی</div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className={generateClassName([style.selector, style.active])}>
                <img src={postImg} />
                <div>
                  <div className="fontWeight-700">ارسال پست</div>
                  <div>اولین زمان تحویل: 14 دی</div>
                </div>
              </div>
            </div>
          </div>
          <ul className={style.sendingStep}>
            <li>
              <div className={style.sendingItemHeader}>
                <div className="fontWeight-700 fontSize-18 m-b-4">
                  مرسوله 1 از 3
                </div>
                <div className="colorGray-979797">
                  3 کالا - تامین تا 1 روز کاری آینده توسز فروشنده
                </div>
              </div>
              <PicturesContainer />
              <TimingContainer />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShipmentsContainer;
