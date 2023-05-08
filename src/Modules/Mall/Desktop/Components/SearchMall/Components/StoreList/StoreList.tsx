import React from "react";
import style from "./StoreList.module.sass";
import StoreBox from "../../../../../Components/StoreBox/StoreBox";

const StoreList = () => {
  return (
    <div className={style.storeContainer}>
      <div className="row flex-x-around">
        <StoreBox boxTYpe="diamond" />
        <StoreBox boxTYpe="gold" />
        <StoreBox boxTYpe="standard" />
        <StoreBox boxTYpe="diamond" />
          <StoreBox boxTYpe="standard" />
        <StoreBox boxTYpe="standard" />
        <StoreBox boxTYpe="silver" />
        <StoreBox boxTYpe="gold" />
        <StoreBox boxTYpe="silver" />
      </div>
    </div>
  );
};

export default StoreList;
