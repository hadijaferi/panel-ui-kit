import React, { FC } from "react";
import style from "./LayoutProfileContent.module.sass";

const LayoutProfileContent: FC = props => {
  return <div className={style.layoutProfileContent}>{props.children}</div>;
};

export default LayoutProfileContent;
