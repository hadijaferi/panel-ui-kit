import React, {Component} from "react";
import Skeleton from "react-loading-skeleton";
import Icon from "../../Common/Icon/Icon";
import Rating from "../../Common/Rating/Rating";

class CommentItemSkeleton extends Component {
  render() {
    return (
        <div className="card p-32">
          <div className="row">
            <div className="col-3 col-xl-5">
              <div>
                <div className="d-flex flex-y-center">
                  <div className="avatar m-l-16 align-self-start"/>
                  <div>
                    <div className="m-b-4 fontSize-16">
                      <Skeleton width="100px"/>
                    </div>
                    <div className="d-flex flex- colorGray-979797">
                      <div>
                        <Icon name="calendar" className="m-l-8"/>
                        <Skeleton width="50px"/>
                      </div>
                      {/*<small className="m-x-8">|</small>
                    <div className="m-b-16">
                      <Icon name="map-pin" className="m-l-8" />
                      <Skeleton width="50px" />
                    </div>*/}
                    </div>
                    <div>
                      <Rating size="small" rate={0}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 col-xl-7">
              <div className="fontWeight-700 m-b-16">
                <Skeleton width="200px"/>
              </div>
              <div className="card card__colorGray p-16 m-b-16">
                <div className="colorRed m-b-4">پاسخ فروشنده:</div>
                <p>
                  <Skeleton width="70px"/>
                </p>
              </div>
              {/*<Button theme="bordered" color="red">
              <span>
                <Icon name="heart" className="m-r-8"/>
                <Skeleton className="m-x-8" width="15px" />
              </span>
            </Button>*/}
            </div>
          </div>
        </div>
    );
  }
}

export default CommentItemSkeleton;
