import React from "react";
import Skeleton from "react-loading-skeleton";
import { StatusComponent } from "../../../../../../../infrastructure/Enum/StatusComponent";
import { returnLoading } from "../../../../../../Helpers/returnStatus";
import Rating from "../../../../../Common/Rating/Rating";
import { IRate } from "../../../../../../../infrastructure/Models/Entity/IRate";
import Button from "../../../../../Common/Button/Button";
import style from "./UserRating.module.sass";
import ChartLinerProgress from "../../../../../Common/ChartLinerProgress/ChartLinerProgress";
import Icon from "../../../../../Common/Icon/Icon";
import { IReturnUseUserRating } from "../../../Hooks/UserRating";

const UserRating = (props: IReturnUseUserRating) => {
  const renderRating = () => {
    return (
      <div className="card m-b-16 p-x-24 p-y-32">
        <span className="fontWeight-500 fontSize-18">امتیاز کاربران به :</span>
        <h2 className="fontWeight-500 fontSize-14 colorGray-5e5e5e">
          {props.title}
        </h2>
        <div className="d-flex m-t-32">
          <div className="col-6 col-xl-8">
            <div className="d-flex">
              <div className={["col-4", style.raa].join(" ")}>
                <div
                  className={[
                    "fontSize-24 fontWeight-500 d-flex",
                    style.rating__number,
                  ].join(" ")}>
                  <span className="fontWeight-700 fontSize-40">
                    {Math.floor(props.rate)}
                  </span>
                  <span className="m-x-8">از</span>
                  <span>5</span>
                </div>
                <Rating justShow rate={props.rate} />
              </div>
              <div className="col-8 m-r-32">
                {props.rates?.map((rate: IRate, index) => (
                  <div className="m-t-16">
                    <ChartLinerProgress
                      key={`rating${rate.Rate}${index}`}
                      className={style.chartLiner}
                      count={rate.Rate}
                      point={Math.floor(rate.Percent)}
                      title={rate.Title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-6 col-xl-4">
            <div className="d-flex flex-over-center h100">
              <Button
                theme="bordered"
                color="red"
                className="col-4 col-xl-6"
                radius="radius16"
                size="medium">
                <Icon name="plus" className="m-l-8" />
                <span className="fontWeight-700">افزودن نظر</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <div className="d-flex m-b-16">
        <Skeleton width="40px" />
        <Skeleton width="290px" className="m-r-32" />
        <Skeleton width="40px" className="m-r-16" />
      </div>
    );
  };

  const renderStatus = () => {
    const status = returnLoading(props.isLoading);
    switch (status) {
      case StatusComponent.full:
        return renderRating();
      default:
        return renderLoading();
    }
  };
  return renderStatus();
};

export default UserRating;
