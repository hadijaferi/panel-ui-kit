import React, { FC } from "react";
import { IToolbarProps } from "./Model/IToolbarProps";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import style from "./Toolbar.module.sass";

const Toolbar: FC<IToolbarProps> = props => {
  return (
    <div
      style={props.style}
      className={generateClassName([
        props.className,
        style.toolbar,
        props.hide && style.hide,
        props.pinned && style.pinned,
      ])}>
      {props.children}
    </div>
  );
};

export default Toolbar;
