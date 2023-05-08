import React from "react";
import style from "./FloorsButton.module.sass";
import useFloor from "../../../../../Hooks/useFloor";
import { IFloor } from "../../../../../../../infrastructure/Models/Entity/IFloor";

const FloorsButton = () => {
  const floor = useFloor();
  return (
    <div className={style.elevatorControl}>
      <div className="d-flex flex-over-center flex-column m-b-16">
        <div className="colorGray-cbcbcb fontWeight-700">طبقات</div>
        <div className="colorRed fontWeight-700">آدرس کلیک</div>
      </div>
      <ul className="row">
        {floor.floorList.map((floorItem: IFloor) => {
          return (
            <li className="col-6 m-b-16">
              <div className=" d-flex flex-x-center">
                <div className={style.elButton}>
                  {/* <span>{floorItem.Name}</span> */}
                  <span>{floorItem.Id}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FloorsButton;
