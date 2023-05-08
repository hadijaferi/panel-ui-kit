import React, { Component } from "react";
import { IComment } from "../../../../infrastructure/Models/Entity/IComment";
import DateConverter from "../../../Helpers/Convertor/dateConverter";
import Rating from "../../Common/Rating/Rating";
import defaultAvatar from "../../../../Resources/image/defaultAvatar.jpg";
import Icon from "../../Common/Icon/Icon";
import Image from "../../Common/Image/Image";

export interface ICommentProps {
  data: IComment;
}

class CommentItemDesktop extends Component<ICommentProps> {
  render() {
    const { data } = this.props;
    return (
      <div className="card p-32">
        <div className="row">
          <div className="col-3 col-xl-5">
            <div>
              <div className="d-flex flex-y-center">
                <div className="avatar align-self-start m-l-16">
                  <Image
                    width={100}
                    height={100}
                    src={data.Customer?.Picture?.Url || defaultAvatar}
                  />
                </div>
                <div>
                  <div className="m-b-4 fontSize-16 fontWeight-500">
                    {data.Customer?.FullName}
                  </div>
                  <div className="d-flex flex- colorGray-979797">
                    <div>
                      <Icon name="calendar" className="m-l-8" />
                      <span>{DateConverter.isToday(data.CreatedAt)}</span>
                      <span>
                        {DateConverter.getTimeWithCustomFormat(
                          String(data.CreatedAt),
                          "YYYY/MM/DD",
                        )}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Rating rate={data.Rating} size="small" justShow />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 col-xl-7">
            <div className="fontWeight-700 m-b-16">{data.Title}</div>
            <p className="text-right m-b-16">{data.ReviewText}</p>
            {data.ReplyText ? (
              <div className="card card__colorGray p-16 m-b-16">
                <div className="colorRed m-b-4">پاسخ فروشنده:</div>
                <p>{data.ReplyText}</p>
              </div>
            ) : null}
            {/* <Button theme="bordered" color="red">
              <span>
                <Icon name="heart" />
                <span className="m-x-8">{data.LikeCount}</span>
              </span>
            </Button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CommentItemDesktop;
