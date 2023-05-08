import React from "react";
import style from "./CommentItem.module.sass";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import CommentStatus from "../Status/CommentStatus";
import Button from "../../../../../Share/Components/Common/Button/Button";
import image from "../../../../../Resources/image/LeftMainSlider.png";
import { ICommentsItemResponse } from "../../../Models/Comments/ICommentsResponse";

interface ICommentItemProps {
  item: ICommentsItemResponse;
}
const CommentItem = (props: ICommentItemProps) => {
  return (
    <div className={style.commentItem}>
      <div className={style.title}>
        <div>
          <Icon name="chat" size="large" className="m-l-8" />
          خوشناز کاضمیان
        </div>
        {props.item.IsApproved ? (
          <CommentStatus color="green">تایید شده</CommentStatus>
        ) : (
          <CommentStatus color="red">تایید نشده</CommentStatus>
        )}
      </div>
      <div className={style.body}>
        <div className="d-flex">
          <div className={style.image}>
            <img src={image} alt="" />
          </div>
          <div className={style.text}>
            <h3>{props.item.Title}</h3>
            <p>{props.item.ReviewText}</p>
          </div>
        </div>
        <Button className={style.btn} theme="text">
          حذف
        </Button>
      </div>
    </div>
  );
};

export default CommentItem;
