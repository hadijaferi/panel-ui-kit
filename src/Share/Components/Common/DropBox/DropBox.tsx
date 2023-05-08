import React, { useState } from "react";
import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import style from "./DropBox.module.sass";

interface IDropBoxProps extends IBaseComponentProps {
  width?: number;
  dropButton: any;
}

const DropBox = (props: IDropBoxProps) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={generateClassName([
        style.dropParent,
        props.className,
        isOpen && style.active,
      ])}>
      <div
        className={style.closeBg}
        onClick={() => {
          setIsOpen((isOpen = false));
        }}
      />
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        {props.dropButton}
      </div>
      <div
        className={generateClassName([
          isOpen && style.active,
          style.dropCard,
          "card p-24",
        ])}
        style={{ width: props.width }}>
        {props.children}
      </div>
    </div>
  );
};

export default DropBox;
