import React from "react";
import style from "./Header.module.sass";
import logoImg from "../../../../../Resources/image/logo2.svg";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import ButtonLink from "../../../../../Share/Components/Common/Button/ButtonLink";

const Header = () => {
  return (
    <div className={style.header}>
      <div className="container">
        <div className="d-flex flex-x-between flex-y-center">
          <div className={style.logo}>
            <img src={logoImg} alt="" />
          </div>
          <ButtonLink href="#">
            <Icon name="m-home" className="colorWhite m-l-8" size="large" />
            <span className="fontWeight-700 colorWhite m-t-4">
              صفحه اصلی آدرس کلیک
            </span>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
