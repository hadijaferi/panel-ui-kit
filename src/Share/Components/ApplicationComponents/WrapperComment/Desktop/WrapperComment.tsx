import React from "react";
import { useRouter } from "next/router";
import useComment from "../Hooks/useComment";
import useUserRating from "../Hooks/UserRating";
import Comment from "./Components/Comment/Comment";
import UserRating from "./Components/UserRating/UserRating";
import style from "./WraperComment.module.sass";
import Icon from "../../../Common/Icon/Icon";
import NotFound from "../../../../../Resources/image/notFound.png";
import Button from "../../../Common/Button/Button";
import { returnStatus } from "../../../../Helpers/returnStatus";
import { StatusComponent } from "../../../../../infrastructure/Enum/StatusComponent";
import { LINKS } from "../../../../Constants/LINKS";
import generateClassName from "../../../../Helpers/Dom/generateClassName";

export interface IWrapperComment {
  entityId: number;
  titleRating: string;
}

const WrapperComment = (props: IWrapperComment) => {
  const hookComment = useComment({ EntityId: props.entityId });
  const hookRate = useUserRating({
    EntityId: props.entityId,
    title: props.titleRating,
  });

  const renderStatus = returnStatus(
    hookComment.isLoading,
    hookComment.comments.length,
  );
  const router = useRouter();
  const goAddComment = () => {
    router.push({
      pathname: LINKS.ADD_COMMENT,
      query: {
        id: props.entityId,
        // eslint-disable-next-line no-restricted-globals
        back: decodeURI(location.pathname),
      },
    });
  };
  switch (renderStatus) {
    case StatusComponent.full:
      return (
        <>
          <UserRating {...hookRate} />
          <Comment {...hookComment} />
        </>
      );
    case StatusComponent.loading:
      return (
        <>
          <UserRating {...hookRate} />
          <Comment {...hookComment} />
        </>
      );
    default:
      return (
        <div
          className={generateClassName([
            style.emptyComment,
            "card d-flex flex-column flex-y-center p-32",
          ])}>
          <img src={NotFound} className={style.NotFoundImage} />
          <span className={style.description}>نظری وجود ندارد.</span>
          <Button
            className={generateClassName([style.addComment, "col-3 col-xl-5"])}
            size="medium"
            theme="bordered"
            onClick={goAddComment}
            color="blue">
            <Icon name="add" className={style.plusIcon} />
            <span className={style.addCommentText}>
              اولین نفری باشید که نظر میدهید
            </span>
          </Button>
        </div>
      );
  }
};

export default WrapperComment;
