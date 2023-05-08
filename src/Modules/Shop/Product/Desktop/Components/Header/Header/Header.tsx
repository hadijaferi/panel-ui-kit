import React from "react";
import VitrinCover from "../VitrinCover/VitrinCover";
import VitrinContactStore from "../../../../../Components/VitrinContactStore/VitrinContactStore";

export default function Header() {
  return (
    <div className="container">
      <div className="d-flex m-t-24">
        <div className="col-10">
          <VitrinCover />
        </div>
        <div className="col-2">
          <VitrinContactStore />
        </div>
      </div>
    </div>
  );
}
