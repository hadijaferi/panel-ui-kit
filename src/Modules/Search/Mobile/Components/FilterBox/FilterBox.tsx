import React from "react";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import style from "./FilterBox.module.sass";
import { IBaseComponentProps } from "../../../../../infrastructure/Models/IBaseComponent";

interface ISearchFilterBoxMobileProps extends IBaseComponentProps {
  onSelect: () => void;
  name: string;
  isActiveFilter: boolean;
}

const SearchFilterBoxMobile = (props: ISearchFilterBoxMobileProps) => {
  return (
    <>
      {props?.isActiveFilter ? (
        <div className={style.filterItemChild} onClick={props.onSelect}>
          <div className="d-flex flex-x-between">
            <span className={style.title}>{props.name}</span>
            <Icon name="chevron-left" size="large" />
          </div>
          <div>{props.children}</div>
        </div>
      ) : (
        <div className={style.filterItem} onClick={props.onSelect}>
          <span className={style.title}>{props.name}</span>
          <Icon name="chevron-left" size="large" />
        </div>
      )}
    </>
  );
};

export default SearchFilterBoxMobile;
