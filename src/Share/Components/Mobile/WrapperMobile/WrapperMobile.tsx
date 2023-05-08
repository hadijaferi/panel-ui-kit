import React, { FC } from "react";
import style from "./WrapperMobile.module.sass";

const WrapperMobile: FC = props => {
  return <div className={style.wrapperMobile}>{props.children}</div>;
};

export default WrapperMobile;
