import React, { Component } from "react";
import Button from "../../../src/Share/Components/Common/Button/Button";
import style from "./cart.module.sass";
import postImg from "../../../src/Resources/image/defaultAvatar.jpg";
import generateClassName from "../../../src/Share/Helpers/Dom/generateClassName";
import RadioButton from "../../../src/Share/Components/Common/Form/RadioButton/RadioButton";
import Price from "../../../src/Share/Components/Common/Price/Price";
import Icon from "../../../src/Share/Components/Common/Icon/Icon";
import TabSelect from "../../../src/Share/Components/Common/TabSelect/TabSelect";
import avatar from "../../../src/Resources/image/logo.svg"
export default class Index extends Component {
  render() {
    return (
      <>
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
                <ul className={style.cartUnitStepper}>
                  <li className={style.active}>سبد خرید (6)</li>
                  <li>اطلاعات آدرس و ارسال</li>
                  <li>پرداخت و اتمام خرید</li>
                </ul>
              </div>
              <div className="col-3" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <ul>
                <li className="m-b-24">
                  <div className="d-flex m-b-16">
                    <div
                      className="avatar avatar__small m-l-4"
                      style={{ backgroundImage: `url(${avatar})` }}
                    />
                    <div>
                      <div className="fontWeight-700 fontSize-16">
                        فروشگاه مجازی گلابی مو شرابی
                      </div>
                      <div className="fontSize-12">تهران</div>
                    </div>
                  </div>
                  <div className="card p-24">
                    <ul className={style.cartStep}>
                      <li className={style.cartItem}>
                        <div className={style.cartPic}>
                          <img src={avatar} alt="" />
                        </div>
                        <div className="d-flex flex-y-end flex-x-between">
                          <div>
                            <div className="fontSize-16 fontWeight-700 m-b-16">
                              صندلی ناهار خوری Best My جنس چوب گردو و مقاوم در
                              برابر نم و رطوبت
                            </div>
                            <div className="fontSize-12 m-b-8 tag_color d-flex flex-y-center">
                              بنفش
                              <span
                                className="tag_color__icon"
                                style={{ backgroundColor: "#87c" }}
                              />
                            </div>
                            <div className="fontSize-12 m-b-8">
                              گارانتی سلامت فیزیکی کالا
                            </div>
                            <div className="fontSize-12 m-b-8">
                              ارسال توسط فروشنده
                            </div>
                            <div className="d-flex flex-y-center">
                              <div>+-</div>
                              <Button theme="iconic">
                                <Icon name="delete" size="large" />
                              </Button>
                            </div>
                          </div>
                          <div>
                            <div>
                              <Price
                                price={20000}
                                className="colorRed fontSize-18"
                                showCurrency={false}
                                mode="discount"
                              />
                            </div>
                            <div>
                              <Price
                                price={20000}
                                className="fontSize-20 fontWeight-700"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.cartItem}>
                        <div className={style.cartPic}>
                          <img src={avatar} alt="" />
                        </div>
                        <div>
                          <div className="fontSize-16 fontWeight-700 m-b-16">
                            صندلی ناهار خوری Best My جنس چوب گردو و مقاوم در
                            برابر نم و رطوبت
                          </div>
                          <div className="fontSize-12 m-b-8 tag_color d-flex flex-y-center">
                            <span
                              className="tag_color__icon"
                              style={{ backgroundColor: "#ffc000" }}
                            />
                            زرد
                          </div>
                          <div className="fontSize-12 m-b-8">
                            گارانتی سلامت فیزیکی کالا
                          </div>
                          <div className="fontSize-12 m-b-8">
                            ارسال توسط فروشنده
                          </div>
                          <div className="d-flex flex-y-center">
                            <div>+-</div>
                            <Button theme="iconic">
                              <Icon name="delete" size="large" />
                            </Button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="d-flex m-b-16">
                    <div
                      className="avatar avatar__small m-l-4"
                      style={{ backgroundImage: `url(${avatar})` }}
                    />
                    <div>
                      <div className="fontWeight-700 fontSize-16">
                        فروشگاه مجازی گلابی مو شرابی
                      </div>
                      <div className="fontSize-12">تهران</div>
                    </div>
                  </div>
                  <div className="card p-24">
                    <ul className={style.cartStep}>
                      <li className={style.cartItem}>
                        <div className={style.cartPic}>
                          <img src={avatar} alt="" />
                        </div>
                        <div>
                          <div className="fontSize-16 fontWeight-700 m-b-16">
                            صندلی ناهار خوری Best My جنس چوب گردو و مقاوم در
                            برابر نم و رطوبت
                          </div>
                          <div className="fontSize-12 m-b-8 tag_color d-flex flex-y-center">
                            بنفش
                            <span
                              className="tag_color__icon"
                              style={{ backgroundColor: "#87c" }}
                            />
                          </div>
                          <div className="fontSize-12 m-b-8">
                            گارانتی سلامت فیزیکی کالا
                          </div>
                          <div className="fontSize-12 m-b-8">
                            ارسال توسط فروشنده
                          </div>
                          <div className="d-flex flex-y-center">
                            <div>+-</div>
                            <Button theme="iconic">
                              <Icon name="delete" size="large" />
                            </Button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <br />
              <hr className="m-y-4" />
              <hr className="m-y-4" />
              <hr className="m-y-4" />
              <hr className="m-y-4" />
              <hr className="m-y-4" />
              <br />
              <div>
                <div className="m-b-24">
                  <div className="fontSize-18 fontWeight-700 m-b-16">
                    آدرس تحویل سفارش
                  </div>
                  <div className="card p-24 d-flex flex-x-between flex-y-center">
                    <div>
                      <div className="fontWeight-700 m-b-8">
                        تهران ، میدان آزادی ، 3 دور دورش بچرخین ، بصورت وارونه
                        اسم علیرضا رو 6 بار داد بزنید، واحد 2
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
                        <Icon
                          name="m-edit-square"
                          size="large"
                          className="m-l-8"
                        />
                        تغییر آدرس
                      </div>
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="d-flex flex-x-between">
                    <div className="fontSize-18 fontWeight-700 m-b-16">
                      مرسوله ها
                    </div>
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
                          className={generateClassName([
                            style.selector,
                            style.active,
                          ])}>
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
                        <div className={style.sendingItemProduct}>
                          <ul className="row">
                            <li className="col-2">
                              <img src={avatar} className="m-b-8" />
                              <div className="d-flex flex-x-between">
                                <div className="tag_color">
                                  <span
                                    className="tag_color__icon"
                                    style={{ backgroundColor: "#7ca" }}
                                  />
                                  فیروزه ای
                                </div>
                                <span>2 عدد</span>
                              </div>
                            </li>
                            <li className="col-2">
                              <img src={avatar} className="m-b-8" />
                              <div className="d-flex flex-x-between">
                                <div className="tag_color">
                                  <span
                                    className="tag_color__icon"
                                    style={{ backgroundColor: "#c1c1c1" }}
                                  />
                                  فیروزه ای
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className={style.sendingItemSelector}>
                          {/*                          <TabSelectDesktop
                            className={style.tab}
                            Item={[
                              {
                                title: "شنبه 14 دی",
                                id: 1,
                              },
                              {
                                title: "یک شنبه 15 دی",
                                id: 2,
                              },
                              {
                                title: "دو شنبه 16 دی",
                                id: 3,
                              },
                              {
                                title: "سه شنبه 17 دی",
                                id: 4,
                              },
                            ]}
                            activeTab={2}
                            onChange={() => {}}
                          /> */}
                          <div className={style.tabBottom}>
                            <ul>
                              <li>
                                <RadioButton
                                  checked
                                  name="xx"
                                  title="ساعت 9"
                                  onCheck={() => {}}
                                />
                              </li>
                              <li>
                                <RadioButton
                                  name="xx"
                                  title="ساعت 10 الی 18"
                                  onCheck={() => {}}
                                />
                              </li>
                              <li>
                                <RadioButton
                                  name="xx"
                                  title="ساعت 18 الی 23"
                                  onCheck={() => {}}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className={style.sendingItemHeader}>
                          <div className="fontWeight-700 fontSize-18 m-b-4">
                            مرسوله 2 از 3
                          </div>
                          <div className="colorGray-979797">
                            3 کالا - تامین تا 1 روز کاری آینده توسز فروشنده
                          </div>
                        </div>
                        <div className={style.sendingItemProduct}>
                          <ul className="row">
                            <li className="col-2">
                              <img src={avatar} className="m-b-8" />
                              <div className="d-flex flex-x-between">
                                <div className="tag_color">
                                  <span
                                    className="tag_color__icon"
                                    style={{ backgroundColor: "#7ca" }}
                                  />
                                  فیروزه ای
                                </div>
                                <span>2 عدد</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className={style.sendingItemSelector}>
                          <TabSelect
                            className={style.tab}
                            item={[
                              {
                                title: "شنبه 14 دی",
                                id: 1,
                              },
                              {
                                title: "یک شنبه 15 دی",
                                id: 2,
                              },
                              {
                                title: "دو شنبه 16 دی",
                                id: 3,
                              },
                              {
                                title: "سه شنبه 17 دی",
                                id: 4,
                              },
                            ]}
                            activeTab={3}
                            onChange={() => {}}
                          />
                          <div className={style.tabBottom}>ساعت 9</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <hr className="m-y-4" />
              <hr className="m-y-4" />
              <hr className="m-y-4" />
              <hr className="m-y-4" />
              <hr className="m-y-4" />
              <br />
              <div style={{ marginBottom: 1000 }}>
                <div className="fontSize-18 fontWeight-700 m-b-16">
                  آدرس تحویل سفارش
                </div>
                <div className="card p-16 m-b-24">
                  <div className="fontSize-18 fontWeight-700 m-b-16">
                    شیوه پرداخت
                  </div>
                  <div className="row m-b-24">
                    <div className="col-4">
                      <div
                        className={generateClassName([
                          style.selector,
                          style.active,
                        ])}>
                        <img src={postImg} />
                        <div>
                          <div className="fontWeight-700">ارسال پست</div>
                          <div>اولین زمان تحویل: 14 دی</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card p-16 m-b-24">
                  <div className="d-flex flex-x-between">
                    <div className="d-flex flex-y-center">
                      <Icon name="point" size="largest" className="m-l-8" />
                      <span className="fontWeight-700">
                        آیا کد تخفیف دارید؟
                      </span>
                    </div>
                    <Button theme="iconic">
                      <Icon name="down" size="medium" />
                    </Button>
                  </div>
                </div>
                <div className="card p-16 m-b-24">
                  <div className="d-flex flex-x-between">
                    <div className="d-flex flex-y-center">
                      <Icon name="point" size="largest" className="m-l-8" />
                      <span className="fontWeight-700">درج کارت هدیه</span>
                    </div>
                    <Button theme="iconic">
                      <Icon name="down" size="medium" />
                    </Button>
                  </div>
                </div>
                <div className="card p-16">
                  <div className="fontSize-18 fontWeight-700 m-b-16">
                    خلاصه سفارش
                  </div>
                  <div className={style.summeryListItem}>
                    <div className="row flex-y-center p-y-24">
                      <div className="col-3">
                        <div>مرسوله 1</div>
                        <div className="fontWeight-700">2 کالا</div>
                      </div>
                      <div className="col-4">
                        <div>ارسال عادی</div>
                        <div className="fontWeight-700">
                          پنجشنبه 11 دی - بازه 20-24
                        </div>
                      </div>
                      <div className="col-4">
                        مبلغ مرسوله:
                        <Price
                          price={4000000}
                          className="fontWeight-700 m-r-8"
                        />
                      </div>
                      <div className="col-1 d-flex flex-x-end">
                        <Button theme="iconic">
                          <Icon name="down" />
                        </Button>
                      </div>
                    </div>
                    <div className="row p-y-24">
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                    </div>
                  </div>
                  <div className={style.summeryListItem}>
                    <div className="row flex-y-center p-y-24">
                      <div className="col-3">
                        <div>مرسوله 1</div>
                        <div className="fontWeight-700">2 کالا</div>
                      </div>
                      <div className="col-4">
                        <div>ارسال عادی</div>
                        <div className="fontWeight-700">
                          پنجشنبه 11 دی - بازه 20-24
                        </div>
                      </div>
                      <div className="col-4">
                        مبلغ مرسوله:
                        <Price
                          price={4000000}
                          className="fontWeight-700 m-r-8"
                        />
                      </div>
                      <div className="col-1 d-flex flex-x-end">
                        <Button theme="iconic">
                          <Icon name="down" />
                        </Button>
                      </div>
                    </div>
                    <div className="row p-y-24">
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                    </div>
                  </div>
                  <div className={style.summeryListItem}>
                    <div className="row flex-y-center p-y-24">
                      <div className="col-3">
                        <div>مرسوله 1</div>
                        <div className="fontWeight-700">2 کالا</div>
                      </div>
                      <div className="col-4">
                        <div>ارسال عادی</div>
                        <div className="fontWeight-700">
                          پنجشنبه 11 دی - بازه 20-24
                        </div>
                      </div>
                      <div className="col-4">
                        مبلغ مرسوله:
                        <Price
                          price={4000000}
                          className="fontWeight-700 m-r-8"
                        />
                      </div>
                      <div className="col-1 d-flex flex-x-end">
                        <Button theme="iconic">
                          <Icon name="down" />
                        </Button>
                      </div>
                    </div>
                    <div className="row p-y-24">
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                      <div className="col-2 text-center">
                        <img src={avatar} alt="" className="m-b-8" />
                        گوشی موبایل گوشینگ و کوچینگ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 p-t-64 m-t-8">
              <div className={style.shortView}>
                <div className="card p-24">
                  <ul>
                    <li className="d-flex flex-x-between fontSize-16 flex-y-center">
                      <div>مجموع قیمت کالاها (3 مورد)</div>
                      <div>
                        <Price
                          price={347000}
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
                          price={7000}
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
                        price={340000}
                        showCurrency={false}
                        className="fontWeight-700 fontSize-24"
                      />{" "}
                      تومان
                    </div>
                  </div>
                  <p className="m-t-16 colorGray-979797">
                    هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال
                    انتخابی شما‌محاسبه و به این مبلغ اضافه خواهد شد
                  </p>
                </div>
                <Button
                  color="red"
                  size="medium"
                  className="col-12 m-t-16"
                  radius="radius16">
                  <span className="fontWeight-700 fontSize-20">
                    ادامه مراحل خرید
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
