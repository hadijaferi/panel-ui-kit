import React from "react";
import DetailInfoBoxMobile from "./Info/InfoBox";
import GalleryPdp from "./Gallery/Gallery";
import { usePdpProductDetails } from "../../../../../Hooks/usePdpProductId";

export default function DetailInfoMobile() {
  const product = usePdpProductDetails();
  return (
    <div className="card card__noRadius p-y-16">
      <div className="m-b-16">
        {product?.Pictures && <GalleryPdp pictures={product?.Pictures} />}
      </div>
      <DetailInfoBoxMobile />
    </div>
  );
}
