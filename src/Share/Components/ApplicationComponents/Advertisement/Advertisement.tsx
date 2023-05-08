import React from "react";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";
import style from "./advertisement.module.sass";

interface IAdvertisementProps extends IBaseComponentProps {
  url: any;
}
const Advertisement = (props: IAdvertisementProps) => {
  return (
    <div
      className={generateClassName(["col-12", style.adItem, props.className])}>
      <img src={props.url} className="col-12" alt="" />
    </div>
  );
};
export default Advertisement;
