import React, { FC } from "react";
import { IToolbarButtonProps } from "./IToolbarButtonProps";
import Button from "../../../../Common/Button/Button";
import Icon from "../../../../Common/Icon/Icon";
import generateClassName from "../../../../../Helpers/Dom/generateClassName";
import style from "./ToolbarButton.module.sass";

const ToolbarButton: FC<IToolbarButtonProps> = props => {
  return (
    <Button
      className={generateClassName([props.className, style.toolbarBtn])}
      theme="iconic"
      onClick={props.onClick}>
      <Icon name={props.icon} className={style.icon} />
      {props.children}
    </Button>
  );
};

export default ToolbarButton;
