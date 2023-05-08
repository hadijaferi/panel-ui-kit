import React, { useEffect } from "react";
import Doors from "./Components/Doors/Doors";
import SearchMall from "./Components/SearchMall/SearchMall";
import useDoor from "../Hooks/useDoor";
import useNavigate from "../Hooks/useNavigate";
import Floors from "./Components/Floors/Floors";
import useFloor from "../Hooks/useFloor";
import { IBaseComponentProps } from "../../../infrastructure/Models/IBaseComponent";

const Mall = (props: IBaseComponentProps) => {
  const door = useDoor();
  const navigate = useNavigate();
  const floor = useFloor();
  useEffect(() => {
    floor.getFloorList();
    setTimeout(() => {
      door.toggle(false);
    }, 1000);
  }, []);
  return (
    <div className={props.className}>
      <Doors theme="light" isOpen={door.isOpen} />
      {navigate.Section === "floors" ? <Floors /> : <SearchMall />}
    </div>
  );
};

export default Mall;
