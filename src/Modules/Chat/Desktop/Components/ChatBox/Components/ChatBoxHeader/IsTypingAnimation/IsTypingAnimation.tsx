import React, { FunctionComponent } from "react";
import style from "./IsTypingAnimation.module.sass";
const IsTypingAnimation: FunctionComponent = () => {
  return (
    <div className={style.typing}>
      <span></span>
    </div>
  );
};

export default IsTypingAnimation;
