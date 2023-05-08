import React, { FC, useState } from "react";
import { SwiperSlide } from "swiper/react";
import CommentMobile from "../../../../../Mobile/Comment/CommentMobile";
import CommentMobileSkeleton from "../../../../../Mobile/Comment/CommentMobileSkeleton";
import SliderItemsMobile from "../../../../../Mobile/SliderItems/SliderItems";
import useComment from "../../../Hooks/useComment";
import ButtonLink from "../../../../../Common/Button/ButtonLink";
import OverPage from "../../../../../Mobile/OverPage/OverPage";
import AllComments from "./AllComments/AllComments";
import AddCommentMobile from "../../../../AddComment/Mobile/CommentMobile";
import NotFound from "../../../../../../../Resources/image/notFound.png";
import Button from "../../../../../Common/Button/Button";
import Icon from "../../../../../Common/Icon/Icon";
import style from "./AllComments/AllComments.module.sass";
import generateClassName from "../../../../../../Helpers/Dom/generateClassName";

interface Props {
  EntityId: number;
}

const CommentsMobile: FC<Props> = ({ EntityId }) => {
  const commentsData = useComment({ EntityId });
  const [isAllCommentsOpen, setIsAllCommentsOpen] = useState(false);
  const [addCommentOverPage, setAddCommentOverPage] = useState(false);
  return (
    <>
      {!!commentsData.comments.length && (
        <div className="container">
          <div className="d-flex flex-x-between m-b-16">
            <div className="fontSize-16 fontWeight-700">نظرات کاربران</div>
            <ButtonLink
              href=""
              color="blue"
              className="fontWeight-500"
              onClick={() => setIsAllCommentsOpen(true)}>
              {commentsData.pagination.TotalItems} نظر
            </ButtonLink>
          </div>
        </div>
      )}

      <SliderItemsMobile
        Skeleton={CommentMobileSkeleton}
        isLoading={commentsData.isLoading}
        countItem={commentsData.comments.length}
        config={{
          slidesPerView: 1.2,
          spaceBetween: 16,
        }}>
        {commentsData.comments.map(comment => (
          <SwiperSlide key={comment.Id}>
            <CommentMobile data={comment} preview />
          </SwiperSlide>
        ))}
      </SliderItemsMobile>
      <OverPage isOpen={isAllCommentsOpen} onToggle={() => {}} fixed>
        {isAllCommentsOpen && (
          <AllComments
            openAddComment={() => {
              setAddCommentOverPage(true);
            }}
            totalPages={commentsData.pagination.TotalPages}
            totalComments={commentsData.pagination.TotalItems}
            initialComments={commentsData.comments}
            EntityId={EntityId}
            close={() => setIsAllCommentsOpen(false)}
          />
        )}
      </OverPage>

      <OverPage
        fixed
        isOpen={addCommentOverPage}
        onToggle={setAddCommentOverPage}>
        <AddCommentMobile
          backAction={() => {
            setAddCommentOverPage(false);
          }}
          entityId={EntityId}
        />
      </OverPage>
      {commentsData.comments.length === 0 && !commentsData.isLoading && (
        <div
          className={generateClassName([
            style.emptyComment,
            "card card__noRadius p-16 d-flex flex-column flex-y-center",
          ])}>
          <img src={NotFound} className={style.NotFoundImage} />
          <span className={style.description}>نظری وجود ندارد.</span>
          <Button
            className={style.addComment}
            theme="bordered"
            size="medium"
            color="blue"
            onClick={() => {
              setAddCommentOverPage(true);
            }}>
            <Icon name="add" className={style.plusIcon} />
            <span className={style.addCommentText}>
              اولین نفری باشید که نظر میدهید
            </span>
          </Button>
        </div>
      )}
    </>
  );
};

export default CommentsMobile;
