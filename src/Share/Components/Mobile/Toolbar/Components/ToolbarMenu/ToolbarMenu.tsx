import React, { FC } from "react";
import style from "../../Toolbar.module.sass";

const ToolbarMenu: FC = props => {
  return <div className={style.left}>{props.children}</div>;
};

export default ToolbarMenu;
