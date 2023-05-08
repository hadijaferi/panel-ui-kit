import React from "react";
import style from "./Doors.module.sass";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";

type themeName = "light";

interface IDoorsProps {
  isOpen?: boolean;
  theme?: themeName;
}

const Doors = (props: IDoorsProps) => {
  return (
    <div
      className={generateClassName([
        style.parent,
        props.isOpen && style.active,
        props.theme && style.lighten,
      ])}>
      <div className={style.door}>
        <div className={style.textBox}>
          پاســـــاژ <br />
          گـــــردی
        </div>
      </div>
      <div className={style.door}>
        <div className={style.textBox}>
          پاســـــاژ <br />
          گـــــردی
        </div>
      </div>
    </div>
  );
};

export default Doors;
