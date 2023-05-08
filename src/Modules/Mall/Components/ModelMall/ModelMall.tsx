import React from "react";
import style from "./ModelMall.module.sass";
import { DOM_ELEMENT_ID } from "../../Constants/DomElementId";
import useTheme from "../../Hooks/useTheme";
import Icon from "../../../../Share/Components/Common/Icon/Icon";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";

export default function ModelMall() {
  const theme = useTheme();
  return (
    <>
      <div className={generateClassName([style.mallContainer])}>
        <div
          onClick={() => {
            theme.toggleTheme();
          }}
          className={generateClassName([style.iconButton, style.white])}>
          <Icon name="sun" />
        </div>
        <div className={style.leftWall}>
          {[...Array(30)].map((_i, index) => {
            return (
              <div
                id={DOM_ELEMENT_ID.ModelMallFloorRow + index}
                key={`${index}floor`}
                className={style.floor}
              />
            );
          })}
          <div className={style.column} />
          <div className={style.column} />
          <div className={generateClassName([style.column, style.elevator])} />
          <div className={style.logo} />
        </div>
        <div className={style.rightWall}>
          {[...Array(30)].map((_i, index) => {
            return (
              <div
                id={`${DOM_ELEMENT_ID.ModelMallFloorRow + index}right`}
                key={`${index}floor`}
                className={style.floor}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
