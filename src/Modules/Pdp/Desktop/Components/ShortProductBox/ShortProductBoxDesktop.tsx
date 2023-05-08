import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../../Share/Store/Reducer";
import usePdpHelpers from "../../../Hooks/usePdpHelpers";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import style from "./ShortProductBox.module.sass";
import formatNumberToPrice from "../../../../../Share/Helpers/formatNumberToPrice";
import Button from "../../../../../Share/Components/Common/Button/Button";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import { ELEMENTS } from "../../../../../Share/Constants/Dom/ELEMENTS";
import defaultProductAvatar from "../../../../../Resources/image/defaultProductStore.jpg";
import Image from "../../../../../Share/Components/Common/Image/Image";

export default function ShortProductBoxDesktop() {
  const [showBox, toggleBox] = useState(true);

  const productHelpers = usePdpHelpers();
  const selectedProductCountToAdd = useSelector(
    (state: IRootState) => state.product.selectedProductCountToAdd,
  );
  const productDetails = productHelpers.getDetails();

  const onScrollDocument = () => {
    const pdpOtherEl = document.getElementById(ELEMENTS.pdpUnderDetails);
    const pdpOtherElyOffset = pdpOtherEl?.offsetTop ?? -1;
    const fixedHeaderEl = document.getElementById(ELEMENTS.HEADER);
    const marginBottom = 0;
    const over =
      window.pageYOffset + (fixedHeaderEl?.offsetHeight ?? 0) + marginBottom >
      pdpOtherElyOffset;
    toggleBox(over);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScrollDocument);
    onScrollDocument();
    return () => {
      window.removeEventListener("scroll", onScrollDocument);
    };
  }, []);

  const totalPrice =
    (productHelpers.getProductFullPrice()?.price ?? 0) *
    selectedProductCountToAdd;

  const firstPhoto = productDetails?.Pictures?.[0];
  return (
    <div
      className={generateClassName([
        style.productShortView,
        !showBox && style.hideBox,
      ])}>
      <div className="card p-24 m-b-16">
        <div className="avatar avatar__no-border avatar__square m-x-auto m-b-16">
          <Image
            width={100}
            height={100}
            src={firstPhoto?.ThumbUrl || defaultProductAvatar}
          />
        </div>
        <div className="fontWeight-500 fontSize-16 m-b-32 text-center">
          {productDetails?.Product?.Name}
        </div>
        <ul className="m-b-16">
          <li className="d-flex">
            <div className="col-5 colorGray-979797">ارسال به:</div>
            <div className="col-7 fontWeight-500">تهران از طریق پست پیشتاز</div>
          </li>
          <li className="d-flex">
            <div className="col-5 colorGray-979797">زمان ارسال:</div>
            <div className="col-7 fontWeight-500">2 تا 3 روز</div>
          </li>
          <li className="d-flex">
            <div className="col-5 colorGray-979797">هزینه ارسال:</div>
            <div className="col-7 fontWeight-500">20,000 تومان</div>
          </li>
        </ul>
        <ul>
          <li className="d-flex">
            <div className="col-5 colorGray-979797">تعداد:</div>
            <div className="col-7 fontWeight-500">
              {selectedProductCountToAdd}
            </div>
          </li>
          {productHelpers.hasCombination() && (
            <li className="d-flex">
              <div className="col-5 colorGray-979797">
                {productHelpers.getCombinationTypeName()}:
              </div>
              <div className="col-7 fontWeight-500">
                {productHelpers.getSelectedCombinationName()}
              </div>
            </li>
          )}
        </ul>
        <div className="d-flex flex-y-center flex-x-around m-t-24">
          <span>قیمت نهایی:</span>
          <span className="fontSize-16">
            <span className="fontWeight-700 fontSize-24 m-l-4">
              {formatNumberToPrice(totalPrice)}
            </span>
            تومان
          </span>
        </div>
      </div>
      {/*      <Button
        color="red"
        size="large"
        radius="radius16"
        className={generateClassName(["col-12 m-b-16", style.addToCartBottom])}>
        <span className={style.btnIcon}>
          <Icon name="bag-cart" />
        </span>
        <span className="fontWeight-700 fontSize-20">افزودن به سبد خرید</span>
      </Button> */}
      <Button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        theme="iconic"
        className="m-x-auto"
        size="large">
        <Icon name="up-circle" size="largest" />
      </Button>
    </div>
  );
}
