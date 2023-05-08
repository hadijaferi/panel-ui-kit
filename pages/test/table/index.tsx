import React, { Component } from "react";
import style from "./table.module.sass";
import productImg from "../../../src/Resources/image/logo.svg";
import Button from "../../../src/Share/Components/Common/Button/Button";
import generateClassName from "../../../src/Share/Helpers/Dom/generateClassName";
import Icon from "../../../src/Share/Components/Common/Icon/Icon";

export default class Index extends Component {
  render() {
    return (
      <div className="container m-t-32">
        <div className="row" style={{ marginBottom: "2000px" }}>
          <div className="col-10 col-xl-9">
            <div className="card p-24">
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th className="col-3">نوع</th>
                      <th className="col-9">توضیحات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                    <tr>
                      <td>مناسب برای</td>
                      <td>آقایان و خانم ها</td>
                    </tr>
                    <tr>
                      <td>ابعاد</td>
                      <td>4.11*4.36*4.15 میلی متر</td>
                    </tr>
                    <tr>
                      <td>فرم صفحه</td>
                      <td>مربع</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-2 col-xl-3">
            <div className={style.productShortView}>
              <div className="card p-16 m-b-16">
                <div
                  className="avatar avatar__padding m-x-auto m-b-16"
                  style={{ backgroundImage: `url(${productImg})` }}
                />
                <div className="fontWeight-500 fontSize-16 m-b-32">
                  ساعت هوشمند اپل واچ سری 5 ضد آب و به هر وسیله مدل apple watc
                </div>
                <ul className="m-b-16">
                  <li className="d-flex">
                    <div className="col-5 colorGray-979797">ارسال به:</div>
                    <div className="col-7 fontWeight-500">
                      تهران از طریق پست پیشتاز
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="col-5 colorGray-979797">زمان ارسال:</div>
                    <div className="col-7 fontWeight-500">2 تا 3 روز</div>
                  </li>
                  <li className="d-flex">
                    <div className="col-5 colorGray-979797">هزینه ارسال:</div>
                    <div className="col-7 fontWeight-500">20,000 تومان</div>
                  </li>
                </ul>
                <ul>
                  <li className="d-flex">
                    <div className="col-5 colorGray-979797">تعداد:</div>
                    <div className="col-7 fontWeight-500">4</div>
                  </li>
                  <li className="d-flex">
                    <div className="col-5 colorGray-979797">رنگ:</div>
                    <div className="col-7 fontWeight-500">
                      صورتی خال خال آلبالوبب
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="col-5 colorGray-979797">سایز:</div>
                    <div className="col-7 fontWeight-500">گنده</div>
                  </li>
                </ul>
                <div className="d-flex flex-y-center flex-x-around">
                  <span>قیمت:</span>
                  <span className="fontSize-16">
                    <span className="fontWeight-700 fontSize-24">
                      16,565,000
                    </span>{" "}
                    تومان
                  </span>
                </div>
              </div>
              <Button
                color="red"
                size="large"
                radius="radius16"
                className={generateClassName([
                  "col-12 m-b-16",
                  style.addToCartBottom,
                ])}>
                <span className={style.btnIcon}>
                  <Icon name="cart" />
                </span>
                <span className="fontWeight-700 fontSize-20">
                  افزودن به سبد خرید
                </span>
              </Button>
              <Button theme="iconic" className="m-x-auto" size="large">
                <Icon name="up-circle" size="largest" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
