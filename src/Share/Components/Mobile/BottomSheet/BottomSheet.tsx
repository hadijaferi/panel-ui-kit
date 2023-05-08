import React, { FC } from "react";
import { IBottomSheetProps } from "./IBottomSheetProps";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import style from "./BottomSheet.module.sass";

const BottomSheet: FC<IBottomSheetProps> = props => {
  return (
    <>
      <div
        onClick={() => props.onToggle(false)}
        className={generateClassName([
          style.bottomSheetBg,
          props.isOpen && style.show,
          props.noBg && style.noBg,
        ])}
      />
      <div
        className={generateClassName([
          style.bottomSheet,
          props.className,
          props.isOpen && style.show,
          props.fixed && style.fixed,
        ])}>
        <div className={style.bottomSheetScroll}>{props.children}</div>
      </div>
    </>
  );
};

export default BottomSheet;
