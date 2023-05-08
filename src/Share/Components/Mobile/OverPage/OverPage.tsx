import React, { FC } from "react";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import { IOverPageProps } from "./IOverPageProps";
import style from "./OverPage.module.sass";

const OverPage: FC<IOverPageProps> = props => {
  return (
    <div
      className={generateClassName([
        style.overPage,
        props.className,
        props.isOpen && style.isOpen,
        props.fixed && style.fixed,
      ])}>
      {props.children}
    </div>
  );
};

export default OverPage;
