import React, { useEffect } from "react";
import useDoor from "../Hooks/useDoor";
import useFloor from "../Hooks/useFloor";
import Doors from "./Components/Doors/Doors";
import style from "./Mall.module.sass";
import FloorList from "../Components/FloorList/FloorList";
import NavBar from "./Components/Navbar/navbar";
import generateClassName from "../../../Share/Helpers/Dom/generateClassName";
import { IBaseComponentProps } from "../../../infrastructure/Models/IBaseComponent";

const Mall = (props: IBaseComponentProps) => {
  const door = useDoor();
  const floor = useFloor();
  useEffect(() => {
    floor.getFloorList();
    setTimeout(() => {
      door.toggle(false);
    }, 1000);
  }, []);
  return (
    <div className={generateClassName([props.className, style.Box])}>
      <Doors theme="light" isOpen={door.isOpen} />
      <NavBar />
      <br />
      {/* ModelMall */}
      <div className="p-x-16">
        <p className={style.FloorHeader}>
          <span>طبقات پاساژ</span>
          <span>30 طبقه</span>
        </p>
        <FloorList />
      </div>
    </div>
  );
};

export default Mall;
