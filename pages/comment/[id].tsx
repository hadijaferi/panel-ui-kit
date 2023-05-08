import React, { Component } from "react";
import { NextPageContext } from "next";
import { ILayouts } from "../../src/infrastructure/Models/Theme/ILayouts";
import AddCommentDesktop from "../../src/Share/Components/ApplicationComponents/AddComment/Desktop/CommentDesktop";

interface addCommentProps {
  data: number;
}

class addComment extends Component<addCommentProps> {
  static getInitialProps(ctx: NextPageContext) {
    return {
      data: ctx.query.id,
      Layout: ILayouts.WEBSITE,
    };
  }

  render() {
    const entityId = this.props.data;
    // return <CommentPageContainer productId={productId} />;
    return <AddCommentDesktop entityId={entityId} />;
  }
}

export default addComment;
