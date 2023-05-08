import React from "react";
import useFloor from "../../Hooks/useFloor";
import style from "./FloorList.module.sass";
import useNavigate from "../../Hooks/useNavigate";
import { DOM_ELEMENT_ID } from "../../Constants/DomElementId";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import { IFloor } from "../../../../infrastructure/Models/Entity/IFloor";

export default function FloorList() {
  const floor = useFloor();
  const navigate = useNavigate();
  return (
    <div className={generateClassName([style.listStep])}>
      <ul>
        {floor.floorList.map((floorItem: IFloor, index) => {
          return (
            <li
              onMouseLeave={() => {
                document
                  ?.getElementById(DOM_ELEMENT_ID.ModelMallFloorRow + index)
                  ?.classList.remove("floor-hover-active");
                document
                  ?.getElementById(
                    `${DOM_ELEMENT_ID.ModelMallFloorRow + index}right`,
                  )
                  ?.classList.remove("floor-hover-active");
              }}
              onMouseOver={() => {
                document
                  ?.getElementById(DOM_ELEMENT_ID.ModelMallFloorRow + index)
                  ?.classList.add("floor-hover-active");
                document
                  ?.getElementById(
                    `${DOM_ELEMENT_ID.ModelMallFloorRow + index}right`,
                  )
                  ?.classList.add("floor-hover-active");
              }}
              className={style.listItem}
              key={`${floorItem.Id}floor`}
              onClick={() => {
                navigate.Navigate("searchMall", String(floorItem.Id));
                floor.setFloorSelected(floorItem.Id);
              }}>
              <span>{floorItem.Floor}</span>
              <span className="fontWeight-500">{floorItem.Name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
