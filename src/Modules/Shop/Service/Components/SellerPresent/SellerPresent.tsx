import React from "react";
import Skeleton from "react-loading-skeleton";
import doctor from "../doctor.png";
import style from "./SellerPresent.module.sass";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import IVitrinElement from "../../../Models/IVitrinElement";
import { IPicture } from "../../../../../infrastructure/Models/Entity/IPicture";
import Image from "../../../../../Share/Components/Common/Image/Image";
import skeletonImg from "../../../../../Resources/image/defaultImage.jpg";

interface ISellerPresentProps extends IVitrinElement {
  Title: string;
  Text: string;
  Picture: IPicture;
  PositionStateTypeId: number;
}

const SellerPresent = (props: ISellerPresentProps) => {
  const height = 669;
  const rtlSkeleton = (
    <div
      className={generateClassName([style.parent, "card", style.rtl])}
      style={{
        height,
      }}>
      <div className={generateClassName(["h100 p-y-32 p-x-24"])}>
        <div>
          <Skeleton width="400px" height="30px" className="m-b-24" />
        </div>
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
      </div>
      <div className={style.skeleton_img}>
        <Image src={skeletonImg} alt="" />
      </div>
    </div>
  );

  const ltrSkeleton = (
    <div
      className={generateClassName([style.parent, "card", style.ltr])}
      style={{
        height,
      }}>
      <div className={style.skeleton_img}>
        <Image src={skeletonImg} />
      </div>
      <div className={generateClassName(["h100 p-y-32 p-x-24"])}>
        <div>
          <Skeleton width="400px" height="30px" className="m-b-24" />
        </div>
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
        <Skeleton width="80%" height="15px" className="m-b-16" />
      </div>
    </div>
  );
  if (props.isLoading) {
    return props.PositionStateTypeId === 1 ? rtlSkeleton : ltrSkeleton;
  }
  return (
    <div
      className={generateClassName([
        style.parent,
        "card",
        props.PositionStateTypeId === 1 ? style.rtl : style.ltr,
      ])}
      style={{ height }}>
      <div
        className={generateClassName(["p-t-32 p-x-24", style.content])}
        style={{ direction: "rtl" }}>
        <span className="m-b-24 fontSize-24 fontWeight-700">
          {props?.Title}
        </span>
        <p className={style.pTag}>{props.Text}</p>
      </div>
      <div className={style.presentPhoto}>
        <Image src={props.Picture?.Url || doctor} />
      </div>
    </div>
  );
};

export default SellerPresent;
