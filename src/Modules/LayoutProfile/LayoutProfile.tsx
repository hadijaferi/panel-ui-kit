import React, { FC } from "react";
import style from "./LayoutProfile.module.sass";
import LayoutProfileSideBar from "./Components/LayoutProfileSideBar/LayoutProfileSideBar";
import LayoutProfileContent from "./Components/LayoutProfileContent/LayoutProfileContent";
import generateClassName from "../../Share/Helpers/Dom/generateClassName";

const LayoutProfile: FC = props => {
  return (
    <div className="container">
      <div className={generateClassName([style.layoutProfile])}>
        <LayoutProfileSideBar />
        <LayoutProfileContent>{props.children}</LayoutProfileContent>
      </div>
    </div>
  );
};

export default LayoutProfile;
