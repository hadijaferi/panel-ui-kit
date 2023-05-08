import React, { Component } from "react";
import Link from "next/link";
import style from "./Footer.module.sass";
import Button from "../../../../Share/Components/Common/Button/Button";
import namad from "../../../../Resources/image/namad.svg";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import phoneIcon from "./image/phone-icon.svg";
import clockIcon from "./image/clock-icon.svg";
import mapIcon from "./image/map-icon.svg";
import calenderIcon from "./image/calender-icon.svg";
import validateIcon from "./image/validate-icon.svg";
import orderIcon from "./image/checkout-icon.svg";
import Icon from "../../../../Share/Components/Common/Icon/Icon";

class Footer extends Component {
  render() {
    return (
      <footer id={style.acFooter}>
        <div className={style.upSection}>
          <div className="container">
            <div className="d-flex flex-x-center colorWhite p-y-16">
              <div
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="cursorPointer">
                <span className="m-l-8"> بازگشت به بالا</span>
                <Icon name="chevron-up" size="large" className="m-b-2" />
              </div>
            </div>
            <hr className={style.hr} />
            <div className="d-flex flex-x-between colorGray-cbcbcb">
              <div className="d-flex flex-y-center">
                <img src={phoneIcon} alt="" className="m-l-8" />
                <span className="fontSize-16 fontWeight-500 m-t-4">
                  پشتیبانی ۲۴ ساعته
                </span>
              </div>
              <div className="d-flex flex-y-center">
                <img src={clockIcon} alt="" className="m-l-8" />

                <span className="fontSize-16 fontWeight-500 m-t-4">
                  تحویل سریع
                </span>
              </div>
              <div className="d-flex flex-y-center">
                <img src={mapIcon} alt="" className="m-l-8" />

                <span className="fontSize-16 fontWeight-500 m-t-4">
                  خرید از سراسر ایران
                </span>
              </div>
              <div className="d-flex flex-y-center">
                <img src={calenderIcon} alt="" className="m-l-8" />

                <span className="fontSize-16 fontWeight-500 m-t-4">
                  ۷ روز ضما نت مرجوعی
                </span>
              </div>
              <div className="d-flex flex-y-center">
                <img src={validateIcon} alt="" className="m-l-8" />

                <span className="fontSize-16 fontWeight-500 m-t-4">
                  درگاه پرداخت امن
                </span>
              </div>
              <div className="d-flex flex-y-center">
                <img src={orderIcon} alt="" className="m-l-8" />

                <span className="fontSize-16 fontWeight-500 m-t-4">
                  پیگیری لحظه ای سفارش
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex flex-x-between m-t-32 m-b-64 p-t-24">
            <div className="col-9">
              <div className={style.wrapperList}>
                <div>
                  <div className="m-b-24 fontSize-16 fontWeight-700 colorWhite">
                    کسب درآمد با‌ما
                  </div>
                  <ul className={style.listMenu}>
                    <li>
                      <Link href="/">
                        <a>فروشنده شو</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>همکاری در تولید محتوا</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>تبلیغات کالا</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>فرصت های شغلی دیگر</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="m-b-24 fontSize-16 fontWeight-700 colorWhite">
                    مرکز تخفیفات
                  </div>
                  <ul className={style.listMenu}>
                    <li>
                      <Link href="/">
                        <a>کمپین ۲۲۲</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>مرکز ووچرها</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>مرکز کوپن ها</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>کارت هدیه</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>فرصت های خرید</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="m-b-24 fontSize-16 fontWeight-700 colorWhite">
                    خدمات مشتریان
                  </div>
                  <ul className={style.listMenu}>
                    <li>
                      <Link href="/">سوالات متداول</Link>
                    </li>
                    <li>
                      <Link href="/">ثبت بازخورد</Link>
                    </li>
                    <li>
                      <Link href="/">سیاست های ارسال</Link>
                    </li>
                    <li>
                      <Link href="/">مرجوعی و جایگزینی</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="m-b-24 fontSize-16 fontWeight-700 colorWhite">
                    همراه آدرس کلیک
                  </div>
                  <ul className={style.listMenu}>
                    <li>
                      <Link href="/">
                        <a>تماس باما</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>درباره ما</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>مجله آدرس کلیک</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>حریم خصوصی</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>خط مشی</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>گزارش ارسال</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="m-b-32">
                <div className="m-b-8 fontSize-16 fontWeight-700 colorWhite">
                  عضویت در خبرنامه آدرس کلیک
                </div>
                <div className={style.newsletter}>
                  <input
                    type="email"
                    name="email"
                    placeholder="ایمیل خود را وارد کنید..."
                  />
                  <Button theme="iconic" className={style.icon}>
                    <Icon name="m-send" size="large" />
                  </Button>
                </div>
              </div>
              <div>
                <div className="m-b-24 fontSize-16 fontWeight-700 colorWhite">
                  همه روزه، 24 ساعته همراهتیم
                </div>
                <div className="colorGray-cbcbcb">
                  <div className="m-b-16">
                    <Icon name="m-call" className="p-l-8" size="large" />
                    <span>021- 22030220</span>
                  </div>
                  <div className="m-b-16">
                    <Icon name="m-message" className="p-l-8" size="large" />
                    <span>info@addressclick.com</span>
                  </div>
                  <div>
                    <Icon name="map-pin" className="p-l-8" size="large" />
                    <span>
                      تهران , خیابان فرشته ,خیابان نیلوفر , نبش مریم غربی , برج
                      رویال آدرس
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.logoDown}>
            <hr className={generateClassName([style.hr, "m-l-24"])} />
            <div className={style.logo}>
              <img src={namad} alt="logo" />
            </div>
            <hr className={generateClassName([style.hr, "m-r-24"])} />
          </div>
          <div className="d-flex flex-x-between">
            <div className="colorGray-cbcbcb">
              کلیه حقوق این سایت متعلق به فروشگاه آنلاین آدرس کلیک می‌باشد
            </div>
            <div className="col-2">
              <div className="d-flex flex-x-between colorGray-979797">
                <Link href="/">
                  <a href="/" title="" target="_blank">
                    <Icon name="social-aparat" size="large" />
                  </a>
                </Link>
                <Link href="/">
                  <a href="/" title="" target="_blank">
                    <Icon name="social-instagram" size="large" />
                  </a>
                </Link>
                <Link href="/">
                  <a href="/" title="" target="_blank">
                    <Icon name="social-facebook" size="large" />
                  </a>
                </Link>
                <Link href="/">
                  <a href="/" title="" target="_blank">
                    <Icon name="social-linkedin" size="large" />
                  </a>
                </Link>
                <Link href="/">
                  <a href="/" title="" target="_blank">
                    <Icon name="social-telegram" size="large" />
                  </a>
                </Link>
                <Link href="/">
                  <a href="/" title="" target="_blank">
                    <Icon name="social-twitter" size="large" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
