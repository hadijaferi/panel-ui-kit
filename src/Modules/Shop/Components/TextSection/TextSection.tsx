import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import IVitrinElement from "../../Models/IVitrinElement";

interface ITextSection extends IVitrinElement {
  Text: string;
}

const TextSection: FC<ITextSection> = props => {
  return props.isLoading ? (
    <div className="card p-32">
      <Skeleton height="16px" className="m-b-8" />
      <Skeleton height="16px" />
    </div>
  ) : (
    <div className="card p-32">
      <p>{props.Text}</p>
    </div>
  );
};
export default TextSection;
