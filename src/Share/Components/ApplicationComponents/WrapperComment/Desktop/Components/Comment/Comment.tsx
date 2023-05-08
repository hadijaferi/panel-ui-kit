import React from "react";
import Pagination from "../../../../../Common/Pagination/Pagination";
import CommentItemSkeleton from "../../../../../Desktop/Comment/Skeleton";
import { returnStatus } from "../../../../../../Helpers/returnStatus";
import { StatusComponent } from "../../../../../../../infrastructure/Enum/StatusComponent";
import CommentItemDesktop from "../../../../../Desktop/Comment/CommentItem";
import gotoCommentSection from "../../../../../../Helpers/gotoCommentSection";
import { IReturnUseComment } from "../../../Hooks/useComment";

const Comment = (props: IReturnUseComment) => {
  const renderComment = () => {
    return (
      <>
        {props.comments.map(comment => (
          <div className="m-y-16" key={`${comment.Id}`}>
            <CommentItemDesktop data={comment} />
          </div>
        ))}
        <div className="d-flex flex-x-end">
          <Pagination
            loading={props.isLoading}
            pagination={props.pagination}
            onPageChange={data => {
              props.onPageChange(data);
              gotoCommentSection();
            }}
          />
        </div>
      </>
    );
  };

  const renderLoading = () => {
    return (
      <>
        <div className="m-y-16">
          <CommentItemSkeleton />
        </div>
        <div className="m-y-16">
          <CommentItemSkeleton />
        </div>
        <div className="m-y-16">
          <CommentItemSkeleton />
        </div>
      </>
    );
  };

  const renderStatus = () => {
    const status = returnStatus(props.isLoading, props.comments?.length);
    switch (status) {
      case StatusComponent.loading:
        return renderLoading();
      case StatusComponent.full:
        return renderComment();
      default:
        return null;
    }
  };
  return (
    <>
      {/*     بخش مرتب سازی ورژن بعد      */}
      {/*            {returnStatus(Comment.isLoading, Comment.comments?.length) !==
            StatusComponent.null && (
                <TabSelect
                    title="مرتب سازی بر اساس:"
                    icon="list-layout"
                    onChange={sort => {
                        Comment.onSortTypeChange(sort);
                    }}
                    activeTab={Comment.sortType}
                    item={[
                        {
                            title: "جدیدترین ها",
                            id: CommentSortType.Newest,
                        },
                        {
                            title: "محبوب ترین ها",
                            id: CommentSortType.MostPopular,
                        },
                    ]}
                />
            )} */}
      {renderStatus()}
    </>
  );
};

export default Comment;
