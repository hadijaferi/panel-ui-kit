import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import style from "./ProductBox.module.sass";
import loadingPhoto from "../../../../Resources/image/defaultPhoto.jpg";

class ProductBoxSkeleton extends Component {
  render() {
    return (
      <div className={generateClassName([style.acProductBox, "card"])}>
        <div className={style.photo}>
          <img src={loadingPhoto} alt="" className="m-x-auto" />
        </div>
        <div className="d-flex flex-column flex-x-between p-x-16">
          <Skeleton height={8} className="m-b-8" />
          <Skeleton width={158} height={8} className="m-b-32" />
          <Skeleton width={97} height={8} className="m-b-16" />
          <div
            className="d-flex flex-x-between"
            style={{
              height: "43px",
            }}>
            <div className="align-self-end">
              {" "}
              <Skeleton width={40} height={8} className="m-b-16" />
            </div>
            <Skeleton
              width={111}
              height={24}
              style={{
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
        <div className={style.footer}>
          <div className="p-x-16">
            <div>
              <Skeleton height={8} className="m-b-8" />
            </div>
            <Skeleton width={48} height={8} className="m-b-8" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductBoxSkeleton;
