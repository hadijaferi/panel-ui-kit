import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import styles from "./StoreBox.module.sass";

const SkeletonStoreBox = () => {
  return (
    <div
      className={generateClassName([
        styles.acStoreBox,
        "acStoreBox",
        styles.acStoreBoxSkeleton,
      ])}>
      <div className="d-flex flex-y-center flex-x-between m-b-16">
        <div className="d-flex flex-y-center fle">
          <SkeletonTheme color="#5e5e5e" highlightColor="#4e4e4e">
            <Skeleton circle width={58} height={58} className="m-l-8" />
          </SkeletonTheme>
          <div className="d-flex flex-column">
            <SkeletonTheme color="#5e5e5e" highlightColor="#4e4e4e">
              <Skeleton width={144} height={18} className="m-b-8" />
            </SkeletonTheme>
            <SkeletonTheme color="#5e5e5e" highlightColor="#4e4e4e">
              <Skeleton width={38} height={13} />
            </SkeletonTheme>
          </div>
        </div>
        <SkeletonTheme color="#5e5e5e" highlightColor="#4e4e4e">
          <Skeleton width={40} height={40} />
        </SkeletonTheme>
      </div>
      <SkeletonTheme color="#5e5e5e" highlightColor="#4e4e4e">
        <Skeleton height={120} />
      </SkeletonTheme>
    </div>
  );
};
export default SkeletonStoreBox;
