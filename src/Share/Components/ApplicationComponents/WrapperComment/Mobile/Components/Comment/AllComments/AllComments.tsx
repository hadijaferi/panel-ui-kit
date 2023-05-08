import React, { FunctionComponent } from "react";
import Toolbar from "../../../../../../Mobile/Toolbar/Toolbar";
import style from "./AllComments.module.sass";
import Page from "../../../../../../Mobile/Page/Page";
import ToolbarTitle from "../../../../../../Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarButton from "../../../../../../Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import CommentMobile from "../../../../../../Mobile/Comment/CommentMobile";
import Button from "../../../../../../Common/Button/Button";
import Icon from "../../../../../../Common/Icon/Icon";
import useOverpageComment from "../../../../Hooks/useOverpageComment";
import { IComment } from "../../../../../../../../infrastructure/Models/Entity/IComment";
import Rating from "../../../../../../Common/Rating/Rating";
import ChartLinerProgress from "../../../../../../Common/ChartLinerProgress/ChartLinerProgress";
import { IRate } from "../../../../../../../../infrastructure/Models/Entity/IRate";

interface OwnProps {
  EntityId: number;
  close: () => void;
  initialComments: IComment[];
  totalComments: number;
  totalPages: number;
  openAddComment: () => void;
}

type Props = OwnProps;

const AllComments: FunctionComponent<Props> = ({
  EntityId,
  close,
  totalComments,
  totalPages,
  initialComments,
  openAddComment,
}) => {
  const { rootRef, observableRef, allComments, rating } = useOverpageComment({
    EntityId,
    totalPages,
    initialComments,
  });
  return (
    <Page
      ref={rootRef}
      toolbar={() => (
        <Toolbar>
          <ToolbarTitle title={`نظرات کاربران (${totalComments})`} />
          <ToolbarButton icon="x" onClick={close} />
        </Toolbar>
      )}
      bottomNavigation={() => (
        <div className={style.addComment}>
          <Button
            color="red"
            className={style.addComment__button}
            onClick={openAddComment}>
            <Icon
              name="plus-square"
              size="largest"
              className={style.addComment__button_icon}
            />
            افزودن نظر
          </Button>
        </div>
      )}>
      <div className={style.rating}>
        <div className={style.rating__rate}>
          <span>{rating.rate} از ۵</span>
          <Rating rate={rating.rate} size="small" justShow />
        </div>
        <div className={style.rating__chart}>
          {rating.rates?.map((rate: IRate, index) => (
            <ChartLinerProgress
              key={index}
              className={style.chartLiner}
              count={rate.Rate}
              point={Math.floor(rate.Percent)}
              title={rate.Title}
            />
          ))}
        </div>
      </div>
      <ul className={style.allComments}>
        {allComments.map(comment => (
          <li key={comment.Id}>
            <CommentMobile data={comment} />
          </li>
        ))}
        <div ref={observableRef} className={style.observable} />
        {allComments.length !== totalComments && (
          <div className={style.loading}>در حال بارگذاری...</div>
        )}
      </ul>
    </Page>
  );
};

export default AllComments;
