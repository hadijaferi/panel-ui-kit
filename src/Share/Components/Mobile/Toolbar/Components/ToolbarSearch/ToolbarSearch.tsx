import React, { FC, useEffect, useState } from "react";
import { IToolbarSearchProps } from "./IToolbarSearchProps";
import ToolbarButton from "../ToolbarButton/ToolbarButton";
import style from "./ToolbarSearch.module.sass";
import generateClassName from "../../../../../Helpers/Dom/generateClassName";

const ToolbarSearch: FC<IToolbarSearchProps> = props => {
  const [searchOpen, setSearchOpen] = useState(!!props.searchIsOpen);
  const { onSearchToggle, onSearchChange } = props;

  // onSearchToggle
  useEffect(() => onSearchToggle(searchOpen), [onSearchToggle, searchOpen]);

  return (
    <>
      <ToolbarButton
        className={props.className}
        icon="search"
        onClick={() => setSearchOpen(true)}
      />

      <div
        className={generateClassName([
          style.searchContainer,
          searchOpen && style.show,
        ])}>
        <input
          type="text"
          placeholder="جستجو"
          value={props.searchValue}
          onChange={event => onSearchChange(event.currentTarget.value)}
        />

        <ToolbarButton
          className={style.closeBtn}
          icon="close"
          onClick={() => setSearchOpen(false)}
        />
      </div>
    </>
  );
};

export default ToolbarSearch;
