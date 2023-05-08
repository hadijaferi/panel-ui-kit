import React from "react";
import style from "./CommentItem.module.sass";
import { ICommentStatusProps } from "../../../Models/Comments/ICommentStatusProps";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";

const CommentStatus = (props: ICommentStatusProps) => {
  return (
    <div
      className={generateClassName([
        style.commentStatus,
        props.color && style[props.color],
      ])}>
      {props.children}
    </div>
  );
};

export default CommentStatus;
