import React, { FunctionComponent } from "react";
import style from "./CommentMobile.module.sass";
import { IComment } from "../../../../infrastructure/Models/Entity/IComment";
import Icon from "../../Common/Icon/Icon";
import Rating from "../../Common/Rating/Rating";
import defaultImage from "../../../../Resources/image/defaultAvatar.jpg";
import DateConverter from "../../../Helpers/Convertor/dateConverter";
import Image from "../../Common/Image/Image";

interface OwnProps {
  preview?: boolean;
  data: IComment;
}

type Props = OwnProps;

const CommentMobile: FunctionComponent<Props> = ({ preview, data }) => {
  return (
    <div
      className={[
        style.acComment,
        preview ? style.acComment_preview : null,
      ].join(" ")}
      style={!preview ? { width: "100%" } : {}}>
      <span className={style.acComment__title}>{data.Title}</span>
      <p className={style.acComment__paragraph}>{`${
        data.ReviewText.length > 130
          ? `${data.ReviewText.slice(0, 135)} ...`
          : data.ReviewText
      }`}</p>
      <div className={style.acComment__userDetail}>
        <div className={style.acComment__userDetail_image}>
          <div className="avatar avatar__mobile">
            <Image
              src={
                data.Customer.Picture.Url
                  ? data.Customer.Picture.Url
                  : defaultImage
              }
              width={100}
              height={100}
            />
          </div>
        </div>
        <p>{data.Customer.FullName}</p>
        <span>
          <span>
            <Icon name="calendar" size="mini" />
            &nbsp;
            {DateConverter.getTimeWithCustomFormat(
              String(data.CreatedAt),
              "YYYY/MM/DD",
            )}
          </span>
          &nbsp;
          {/* {" | "} */}
          {/* &nbsp; */}
          {/* <span> */}
          {/*  <Icon name="m-location" size="mini" /> */}
          {/*  &nbsp;{" "} */}
          {/* </span> */}
        </span>
      </div>
      <div className={style.acComment__ratings}>
        <Rating rate={data.Rating} justShow squareIcon size="small" />
      </div>
      {!preview && data.ReplyText && (
        <div className={style.acComment__reply}>
          <span>پاسخ فروشنده:</span>
          {data.ReplyText}
        </div>
      )}
    </div>
  );
};

export default CommentMobile;
