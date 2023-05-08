import React, { FC } from "react";
import style from "./LeftMainSlider.module.sass";
import image from "../../../../../Resources/image/LeftMainSlider.png";
import ButtonLink from "../../../../../Share/Components/Common/Button/ButtonLink";

const LeftMainSlider: FC = () => {
  return (
    <div className={style.leftMainSlider}>
      <img src={image} alt="" />
      <div className={style.text}>
        <h1>
          گشت و گذار در <span>پاساژ اینترنتی</span>
        </h1>
        <p>
          به راحتی در پاساز اینترنتی ادرس کلیک گشت و گذار کنید و میان واحد های
          تجاری خرید خود را انجام دهید. <br />
          حس متقاوت و تجربه ای نوین در یک پاساژگردی و مشاهده ویرین ها ...
        </p>
      </div>
      <div className={style.btns}>
        <ButtonLink href="#" className={style.btn}>
          ورود به پاساژگردی
        </ButtonLink>
        <ButtonLink href="#" color="blue">
          پاساژ آدرس کلیک چیست؟!
        </ButtonLink>
      </div>
    </div>
  );
};

export default LeftMainSlider;
