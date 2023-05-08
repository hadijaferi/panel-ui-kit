import React from "react";
import Skeleton from "react-loading-skeleton";
import Tab from "../../../../Share/Components/Common/Tab/Tab";
import { ITabItem } from "../../../../Share/Components/Common/Tab/Models/ITabProps";
import CommentItem from "./Item/CommentItem";
import { ICommentsResponse } from "../../Models/Comments/ICommentsResponse";
import noItemImage from "../../../../Resources/image/nocomment.svg";

interface ICommentsProps {
  comments?: ICommentsResponse;
  isLoading?: boolean;
}

const Comments = (props: ICommentsProps) => {
  const itemsIsApproved = props.comments?.Items.filter(item => item.IsApproved);
  const itemsIsNotApproved = props.comments?.Items.filter(
    item => !item.IsApproved,
  );
  const renderLoading = () => {
    return (
      <div className="row">
        <div className="col-6 m-b-16">
          <Skeleton height={207} />
        </div>
        <div className="col-6 m-b-16">
          <Skeleton height={207} />
        </div>
        <div className="col-6 m-b-16">
          <Skeleton height={207} />
        </div>
        <div className="col-6 m-b-16">
          <Skeleton height={207} />
        </div>
      </div>
    );
  };
  const renderNoItem = (message: string) => {
    return (
      <div className="d-flex flex-over-center flex-wrap m-y-64">
        <img src={noItemImage} alt="no item" />
        <div className="col-12 text-center m-t-16 fontWeight-500">
          {message}
        </div>
      </div>
    );
  };
  const renderVerifiedComments = () => {
    return itemsIsApproved?.length ? (
      <div className="row">
        {itemsIsApproved?.map((item, index) => (
          <div key={index} className="col-6 m-b-16">
            <CommentItem item={item} />
          </div>
        ))}
      </div>
    ) : (
      renderNoItem("نظر تایید شده ای وجود ندارد")
    );
  };
  const renderUnapprovedComments = () => {
    return itemsIsNotApproved?.length ? (
      <div className="row">
        {itemsIsNotApproved?.map((item, index) => (
          <div key={index} className="col-6 m-b-16">
            <CommentItem item={item} />
          </div>
        ))}
      </div>
    ) : (
      renderNoItem("نظر تایید نشده ای وجود ندارد")
    );
  };
  const tabItems: ITabItem[] = [
    {
      id: 0,
      title: `نظرات تایید شده (${
        props?.comments?.Items.filter(item => item.IsApproved).length || 0
      })`,
      content: props.isLoading ? renderLoading : renderVerifiedComments,
      isActive: true,
    },
    {
      id: 1,
      title: `نظرات تایید نشده (${
        props?.comments?.Items.filter(item => !item.IsApproved).length || 0
      })`,
      content: props.isLoading ? renderLoading : renderUnapprovedComments,
    },
  ];
  return <Tab items={tabItems} />;
};

export default Comments;
