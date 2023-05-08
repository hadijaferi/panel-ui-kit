import React from "react";
import style from "./Floors.module.sass";
import FloorList from "../../../Components/FloorList/FloorList";
import ModelMall from "../../../Components/ModelMall/ModelMall";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import Header from "../Header/Header";

const Floors = () => {
  return (
    <section
      className={generateClassName([
        "d-flex flex-x-between",
        style.firstSection,
      ])}>
      <Header />
      <div className="col-6 col-xl-5 d-flex flex-over-center">
        <FloorList />
      </div>
      <div className="col-6 col-xl-7 d-flex flex-over-center">
        <ModelMall />
      </div>
    </section>
  );
};

export default Floors;
