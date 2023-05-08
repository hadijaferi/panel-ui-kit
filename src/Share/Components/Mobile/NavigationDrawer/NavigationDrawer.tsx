import React, { FC } from "react";
import { INavigationDrawerProps } from "./INavigationDrawerProps";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import style from "./NavigationDrawer.module.sass";

const NavigationDrawer: FC<INavigationDrawerProps> = props => {
  const { onDrawerToggle } = props;

  return (
    <>
      <div
        onClick={() => onDrawerToggle(false)}
        className={generateClassName([
          style.navigationDrawerBg,
          props.isOpen && style.open,
        ])}
      />
      <div
        className={generateClassName([
          style.navigationDrawer,
          props.isOpen && style.open,
        ])}>
        {props.children}
      </div>
    </>
  );
};

export default NavigationDrawer;
