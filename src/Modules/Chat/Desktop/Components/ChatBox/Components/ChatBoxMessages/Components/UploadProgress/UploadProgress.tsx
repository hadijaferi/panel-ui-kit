import React, { FunctionComponent } from "react";
import style from "./UploadProgress.module.sass";
import Icon from "../../../../../../../../../Share/Components/Common/Icon/Icon";

interface OwnProps {
  percent: number;
}

type Props = OwnProps;

const UploadProgress: FunctionComponent<Props> = ({ percent }) => {
  return (
    <div className={style.uploadSpinner}>
      <svg
        className={style.canvas}
        viewBox="0 0 34 34"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          className={style.circle}
          cx="17"
          cy="17"
          r="14"
          strokeDasharray={`${percent || 0} 100`}
        />
      </svg>
      <Icon name="x" />
    </div>
  );
};

export default UploadProgress;
