import React from "react";
import style from "./PdpDetailDesktop.module.sass";
import GalleryDesktop from "../../../../../Share/Components/Desktop/Gallery/Gallery";
import { IPicture } from "../../../../../infrastructure/Models/Entity/IPicture";
import PdpSummary from "./Component/Summary/Summary";
import PdpDetailConfigDesktop from "./Component/Config/PdpConfigDesktop";

interface IDetailDesktopProps {
  Pictures: IPicture[];
}

export default function PdpDetailDesktop(props: IDetailDesktopProps) {
  return (
    <div className={style.detailWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <GalleryDesktop images={props.Pictures} />
          </div>
          <div className="col-5">
            <PdpDetailConfigDesktop />
          </div>
          <div className="col-1 col-xl-0" />
          <div className="col-2 col-xl-3">
            <PdpSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
