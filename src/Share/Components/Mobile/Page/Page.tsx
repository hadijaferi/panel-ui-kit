import React, { forwardRef } from "react";
import { IPageProps } from "./Model/IPageProps";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import style from "./Page.module.sass";
import Noop from "../Noop/Noop";

type Props = React.HTMLProps<HTMLDivElement> & IPageProps;

const Page = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const toolbar = props.toolbar ? props.toolbar() : null;

  const bottomNavigation = props.bottomNavigation
    ? props.bottomNavigation()
    : null;

  const navigationDrawer = props.navigationDrawer
    ? props.navigationDrawer()
    : null;

  const bottomSheet = props.bottomSheet ? props.bottomSheet() : null;

  return (
    <div
      className={generateClassName([props.className, style.page])}
      style={props.style}
      ref={ref}>
      <div className={style.appContainer}>
        {toolbar}
        <div className={style.pageContent}>
          <div className={style.pageContainer}>{props.children}</div>
          <div className={style.pageExtra}>{bottomSheet}</div>
        </div>
        {bottomNavigation}
      </div>
      {navigationDrawer}
    </div>
  );
});

Page.defaultProps = {
  toolbar: Noop,
  bottomNavigation: Noop,
  navigationDrawer: Noop,
};

export default Page;
