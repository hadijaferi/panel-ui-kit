import React, { FC } from "react";
import { IBottomNavigationProps } from "./IBottomNavigationProps";
import style from "./BottomNavigation.module.sass";
import generateClassName from "../../../Helpers/Dom/generateClassName";

const BottomNavigation: FC<IBottomNavigationProps> = props => {
  return (
    <div
      className={generateClassName([
        style.bottomNavigation,
        props.className,
        "ac-bottomNavigation",
        props.hide && style.hide,
      ])}>
      {props.children}
    </div>
  );
};

export default BottomNavigation;
