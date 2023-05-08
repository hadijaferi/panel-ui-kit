import React from "react";
import style from "./Image.module.sass";

interface IImageCustomProps {
  size?: any;
}

const Image = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > &
    IImageCustomProps,
) => {
  const { size, ...allProps } = props;

  return <img {...allProps} className={style.image} />;
};

export default Image;
