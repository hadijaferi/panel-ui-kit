import React from "react";
import ImageSliderMobile from "../../../../../../../../Share/Components/Mobile/ImageSlider/ImageSlider";
import { IPicture } from "../../../../../../../../infrastructure/Models/Entity/IPicture";

interface GalleryPdpProps {
  pictures: IPicture[];
}

export default function GalleryPdp(props: GalleryPdpProps) {
  return <ImageSliderMobile images={props.pictures} imageSize={330} />;
}
