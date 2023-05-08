import React from "react";

const CommentItem = () => {
  return (
    <div className="d-flex">
      <div className="col-6">
        <CommentItem />
      </div>
      <div className="col-6">
        <CommentItem />
      </div>
      <div className="col-6">
        <CommentItem />
      </div>
      <div className="col-6">
        <CommentItem />
      </div>
    </div>
  );
};

export default CommentItem;
