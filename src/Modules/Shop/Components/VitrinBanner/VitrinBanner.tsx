import React, { FC } from "react";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import style from "./VitrinBanner.module.sass";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import IVitrinElement from "../../Models/IVitrinElement";
import Image from "../../../../Share/Components/Common/Image/Image";

export interface IPicture {
  AltAttribute: any;
  DisplayOrder: number;
  Id: number;
  ThumbUrl: string;
  TitleAttribute: any;
  Url: string;
}
export interface IVitrinBannerItem {
  Url: string;
  Picture: IPicture;
}

interface IVitrinBannerProps extends IVitrinElement {
  BannerItems: IVitrinBannerItem[];
  imageHeight?: number;
}

const VitrinBanner: FC<IVitrinBannerProps> = props => {
  const renderBanner = () => {
    return (
      <div className={generateClassName([style.vitrinBanner, props.className])}>
        {props.BannerItems?.map((item, index) => (
          <div className={style.vitrinBannerItem}>
            <Link href={item?.Url} key={index}>
              <a>
                <Image
                  {...(props.imageHeight
                    ? { style: { height: `${props.imageHeight}px` } }
                    : {})}
                  src={item.Picture.Url}
                  alt={item.Picture.Url}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  const renderLoading = () => {
    return (
      <SkeletonTheme color="#e5e5e5">
        <Skeleton
          className={style.skeleton}
          height="200px"
          style={{ borderRadius: "16px" }}
        />
      </SkeletonTheme>
    );
  };
  return (
    <div className={style.mainSlider}>
      {props.isLoading ? renderLoading() : renderBanner()}
    </div>
  );
};

export default VitrinBanner;
