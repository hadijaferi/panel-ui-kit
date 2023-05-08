import React from "react";
import style from "./FloorTitle.module.sass";
import useFloor from "../../../../../Hooks/useFloor";

const FloorTitle = () => {
  const floor = useFloor();
  return (
    <div className={style.listHeader}>
      <div className="container">
        <div className="d-flex flex-x-center flex-y-center">
          <div className={style.floorNum}>5</div>
          <div>
            <h1 className="fontWeight-999">{floor.FloorSelected.Floor}</h1>
            <div>{floor.FloorSelected.Name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorTitle;
