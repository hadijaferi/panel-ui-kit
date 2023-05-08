import React, { FunctionComponent } from "react";
import Skeleton from "react-loading-skeleton";
import style from "./CommentMobile.module.sass";
import { IComment } from "../../../../infrastructure/Models/Entity/IComment";

interface OwnProps {
  preview?: boolean;
  data: IComment;
}

type Props = OwnProps;

const CommentMobileSkeleton: FunctionComponent<Props> = ({preview}) => {
  return (
    <div
      className={[
        style.acComment,
        preview ? style.acComment_preview : null,
      ].join(" ")}>
      <span className={style.acComment__title}>
        <Skeleton width="30%" />
      </span>
      <p className={style.acComment__paragraph}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </p>
      <div className={style.acComment__userDetail}>
        <div className={style.acComment__userDetail_image}>
          <Skeleton circle width={32} height={32} />
        </div>
        <p>
          <Skeleton width={100} height={12} />
        </p>
        <span>
          <Skeleton width={100} height={12} />
        </span>
      </div>
      <div className={style.acComment__ratings}>
        <Skeleton width={72} height={32} style={{borderRadius: "8px"}} />
        <Skeleton width={100} height={16} style={{borderRadius: "8px"}} />
      </div>
    </div>
  );
};

export default CommentMobileSkeleton;
