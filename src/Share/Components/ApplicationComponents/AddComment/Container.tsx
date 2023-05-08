import React, { Component } from "react";
import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./Desktop/CommentDesktop"));

interface ICommentPageContainerProps {
  productId: number;
}

class CommentPageContainer extends Component<ICommentPageContainerProps> {
  render() {
    return <Desktop entityId={this.props.productId} />;
  }
}

export default CommentPageContainer;
