import React, { FC } from "react";
import style from "./LayoutProfileSideBar.module.sass";
import imgAvatar from "../../../../Resources/image/defaultAvatar.jpg";
import Icon from "../../../../Share/Components/Common/Icon/Icon";
import ButtonLink from "../../../../Share/Components/Common/Button/ButtonLink";
import { LINKS } from "../../../../Share/Constants/LINKS";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";

const LayoutProfileSideBar: FC = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarContainer}>
        <div className={style.sidebarInfo}>
          <div className={style.top}>
            <div className={style.avatar}>
              <img src={imgAvatar} alt="" />
            </div>
            <div className={style.name}>حسن قلی خان</div>
            <div className={style.mobile}>09120727890</div>
          </div>
          <div className={style.bottom}>
            <ButtonLink
              href={LINKS.PROFILE.CHAT}
              theme="text"
              size="medium"
              className={style.profileBtn}>
              <span className={style.iconContainer}>
                <Icon name="message" size="large" />
                <span className={style.badge}>3</span>
              </span>
              چت ها
            </ButtonLink>
            <div className={style.or} />
            <ButtonLink
              href={LINKS.PROFILE.NOTIFICATION}
              theme="text"
              size="medium"
              className={style.profileBtn}>
              <span className={style.iconContainer}>
                <Icon name="notification" size="large" />
                <span className={style.badge}>1</span>
              </span>
              پیغام ها
            </ButtonLink>
          </div>
        </div>

        <div className={style.sidebarMenu}>
          <div className={style.top}>
            <ButtonLink
              className="m-l-4"
              href={LINKS.PROFILE.DASHBOARD}
              theme="bordered"
              size="medium"
              color="red"
              radius="radius16">
              داشبورد اصلی
            </ButtonLink>
            <ButtonLink
              className="m-r-4"
              href={LINKS.PROFILE.ORDERS}
              theme="bordered"
              color="gray"
              size="medium"
              radius="radius16">
              سفارش های من
            </ButtonLink>
          </div>

          <div className={style.middle}>
            <div className={style.menu}>
              <div className={style.header}>شخصی سازی</div>
              <div className={style.content}>
                <ul>
                  <li>
                    <ButtonLink href="#" theme="text" className={generateClassName([style.btn, style.active])}>
                      <span className={style.iconContainer}>
                        <Icon name="heart" size="large" />
                      </span>
                      <span className={style.title}>علاقه مندی های من</span>
                    </ButtonLink>
                  </li>
                  <li>
                    <ButtonLink href="#" theme="text" className={style.btn}>
                      <span className={style.iconContainer}>
                        <Icon name="eye" size="large" />
                      </span>
                      <span className={style.title}>آخرین بازدید های من</span>
                    </ButtonLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.menu}>
              <div className={style.header}>تنظیمات</div>
              <div className={style.content}>
                <ul>
                  <li>
                    <ButtonLink href="#" theme="text" className={style.btn}>
                      <span className={style.iconContainer}>
                        <Icon name="user" size="large" />
                      </span>
                      <span className={style.title}>مشخصات کاربری</span>
                    </ButtonLink>
                  </li>
                  <li>
                    <ButtonLink href="#" theme="text" className={style.btn}>
                      <span className={style.iconContainer}>
                        <Icon name="map-pin" size="large" />
                      </span>
                      <span className={style.title}>نشانی ها</span>
                    </ButtonLink>
                  </li>
                  <li>
                    <ButtonLink href="#" theme="text" className={style.btn}>
                      <Icon name="lock" size="large" className="m-l-16" />
                      <span className={style.title}>تغییر رمز عبور</span>
                    </ButtonLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.menu}>
              <div className={style.header}>ارتباط</div>
              <div className={style.content}>
                <ul>
                  <li>
                    <ButtonLink href="#" theme="text" className={style.btn}>
                      <span className={style.iconContainer}>
                        <Icon name="message" size="large" />
                        <span className={style.badge}>1</span>
                      </span>
                      <span className={style.title}>چت و پشتیبانی</span>
                    </ButtonLink>
                  </li>
                  <li>
                    <ButtonLink href="#" theme="text" className={style.btn}>
                      <span className={style.iconContainer}>
                        <Icon name="notification" size="large" />
                        <span className={style.badge}>1</span>
                      </span>
                      <span className={style.title}>پیغام ها</span>
                    </ButtonLink>
                  </li>
                  <li>
                    <ButtonLink href="#" theme="text" className={style.btn}>
                      <span className={style.iconContainer}>
                        <Icon name="message-text" size="large" />
                      </span>
                      <span className={style.title}>نظرات ثبت شده</span>
                    </ButtonLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={style.bottom}>
            <ButtonLink
              href={LINKS.AUTH.LOGOUT}
              theme="text"
              size="large"
              className={style.logoutBtn}>
              <Icon name="log-out" size="large" className="m-l-8" />
              خروج
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutProfileSideBar;
