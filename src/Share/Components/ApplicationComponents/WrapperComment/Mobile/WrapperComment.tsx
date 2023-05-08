import React from "react";
import useComment from "../Hooks/useComment";
import Comment from "./Components/Comment/Mobile";

export interface IWrapperComment {
  entityId: number;
  titleRating: string;
}

const WrapperComment = (props: IWrapperComment) => {
  const hookComment = useComment({ EntityId: props.entityId });
  return <Comment EntityId={props.entityId} {...hookComment} />;
};

export default WrapperComment;
