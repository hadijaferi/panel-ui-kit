import React from "react";
import style from "./Detail.module.sass";
import ConfigDesktop from "./Components/Config/Config";
import useGetPictures from "../../../Hooks/Detail/GetPictures";
import SummaryDesktop from "./Components/Summary/Summary";
import GalleryDesktop from "../../../../../Share/Components/Desktop/Gallery/Gallery";

const DetailDesktop = () => {
  const GetPictures = useGetPictures();
  return (
    <div className={style.detailWrapper}>
      <div className="container">
        <div className="row flex-x-between">
          <div className="col-4">
            <GalleryDesktop images={GetPictures.pictures} />
          </div>
          <div className="col-5">
            <ConfigDesktop />
          </div>
          <div className="col-1 col-xl-0" />
          <div className="col-2 col-xl-3">
            <SummaryDesktop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDesktop;
