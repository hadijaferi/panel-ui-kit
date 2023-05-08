import React, { FC } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import style from "./VitrinCoverMenu.module.sass";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";
import IVitrinElement from "../../Models/IVitrinElement";

export interface IVitrinCoverMenuItem {
  title: string;
  link: string;
}

interface IVitrinCoverMenuProps extends IBaseComponentProps, IVitrinElement {
  item: IVitrinCoverMenuItem[];
  activeTab?: number;
}

const VitrinCoverMenu: FC<IVitrinCoverMenuProps> = props => {
  const renderMenu = () => {
    return (
      <div
        className={generateClassName([style.vitrinCoverMenu, props.className])}>
        <ul className="d-flex">
          {props.item.map((item, index) => (
            <li
              className={generateClassName([
                props.activeTab === index && style.active,
              ])}
              key={index}>
              <Link href={item.link}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const renderLoading = () => {
    return <Skeleton className={style.skeleton} />;
  };
  return (
    <div className={style.mainSlider}>
      {props.isLoading ? renderLoading() : renderMenu()}
    </div>
  );
};

export default VitrinCoverMenu;
