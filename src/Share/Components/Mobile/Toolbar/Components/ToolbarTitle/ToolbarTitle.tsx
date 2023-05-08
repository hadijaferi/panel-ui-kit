import React, { FC } from "react";
import style from "../../Toolbar.module.sass";
import { IToolbarTitleProps } from "./IToolbarTitleProps";

const ToolbarTitle: FC<IToolbarTitleProps> = props => {
  const rightMenuButton = props.rightMenuButton ? props.rightMenuButton : null;

  return (
    <div className={style.right}>
      {rightMenuButton}
      {props.title && <div className={style.title}>{props.title}</div>}
    </div>
  );
};

export default ToolbarTitle;
