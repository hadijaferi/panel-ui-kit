import React, { FC } from "react";
import ToolbarButton from "../ToolbarButton/ToolbarButton";
import { IToolbarHomeProps } from "./IToolbarHomeProps";
import generateClassName from "../../../../../Helpers/Dom/generateClassName";
import style from "./ToolbarHome.module.sass";

const ToolbarHome: FC<IToolbarHomeProps> = props => {
  const {
    onSearchChange,
    searchIsOpen,
    setSearchIsOpen,
    onNavigationClick,
  } = props;

  return (
    <div
      className={generateClassName([
        style.toolbarHome,
        searchIsOpen && style.isSearchOpen,
      ])}>
      <ToolbarButton
        className={style.toolbarHomeBtn}
        icon="align-justify"
        onClick={() => onNavigationClick()}
      />

      <div className={style.search}>
        <div className={style.placeHolder}>
          جستجو در
          <span className="colorRed"> آدرس کلیکـ </span>
          ...
        </div>

        <input
          type="text"
          placeholder="جستجو"
          value={props.searchValue}
          onFocus={() => setSearchIsOpen(true)}
          onBlur={() => setSearchIsOpen(false)}
          onChange={event => onSearchChange(event.currentTarget.value)}
        />
      </div>

      <ToolbarButton
        className={style.toolbarHomeBtn}
        icon="user"
        onClick={() => {}}
      />
    </div>
  );
};

export default ToolbarHome;
