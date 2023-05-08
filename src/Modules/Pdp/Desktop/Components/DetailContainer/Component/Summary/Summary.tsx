import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { IRootState } from "../../../../../../../Share/Store/Reducer";
import { ProductSetSelectedCountToAdd } from "../../../../../../../Share/Store/Product/actions";
import style from "./Summary.module.sass";
import Icon from "../../../../../../../Share/Components/Common/Icon/Icon";
import Button from "../../../../../../../Share/Components/Common/Button/Button";
import StockQuantity from "../../../../../../../Share/Components/Common/StockQunatity/StockQuantity";
import defaultServiceAvatar from "../../../../../../../Resources/image/defaultProductStore.jpg";
import usePdpHelpers from "../../../../../Hooks/usePdpHelpers";
import formatNumberToPrice from "../../../../../../../Share/Helpers/formatNumberToPrice";
import Image from "../../../../../../../Share/Components/Common/Image/Image";
import formatVitrinLink from "../../../../../../../Share/Helpers/Links/formatVitrinLink";

export default function PdpSummary() {
  const productHelpers = usePdpHelpers();
  const productDetails = productHelpers.getDetails();
  const mieter = productDetails?.Mieter;

  const selectedProductCountToAdd = useSelector(
    (state: IRootState) => state.product.selectedProductCountToAdd,
  );
  const dispatch = useDispatch();

  const setSelectedProductCountToAdd = (count: number) =>
    dispatch(ProductSetSelectedCountToAdd(count));
  return (
    <div className={style.acMieterBox}>
      <div className="fontSize-12 m-b-16">فروشنده این کالا</div>
      <div className="avatar m-x-auto m-b-16">
        <Image
          width={100}
          height={100}
          src={mieter?.LogoPicture?.Url || defaultServiceAvatar}
        />
      </div>
      <div className="fontWeight-700 fontSize-14">{mieter?.StoreName}</div>
      <div className="d-flex flex-over-center m-b-16">
        <div className="colorGreen">تایید شده</div>
        <small className="colorGray-cbcbcb m-x-16">|</small>
        <div className="d-flex flex-y-center">
          <Icon name="star-fill" size="medium" className="m-l-8 m-b-2" />
          <span>{mieter?.Rate}</span>
        </div>
      </div>
      <ul className={style.infoCounter}>
        <li>
          <div className="fontSize-12 colorGray-979797">میزان رضایت</div>
          <div>
            <span className="fontWeight-700 fontSize-20">
              {mieter?.CustomerSatisfactionRate}
            </span>
            %
          </div>
        </li>
        <li>
          <div className="fontSize-12 colorGray-979797">ارسال به موقع</div>
          <div>
            <span className="fontWeight-700 fontSize-20">
              {mieter?.OnTimeDeliveryRate}
            </span>
            %
          </div>
        </li>
        {/* <li>
                    <div className="fontSize-12 colorGray-979797">پاسخ به چت</div>
                    <div>
            <span className="fontWeight-700 fontSize-20">
              {mieter?.ChatReplyRate}
            </span>
                        %
                    </div>
                </li> */}
      </ul>
      <div className="m-b-24">
        <Link href={formatVitrinLink("unknown")}>
          <a>
            <Button theme="bordered" className="col-12">
              <Icon name="market" size="large" className="m-l-4" />
              <span className="fontSize-12 fontWeight-500">
                مشاهده واحد تجاری
              </span>
            </Button>
          </a>
        </Link>
      </div>
      <div className="m-b-24">
        <div className="d-flex flex-y-center text-right m-b-4">
          <div className="col-4 colorGray-979797 fontSize-12">ارسال به:</div>
          <div className="fontWeight-500">تهران از طریق پست پیشتاز</div>
        </div>
        <div className="d-flex flex-y-center text-right m-b-4">
          <div className="col-4 colorGray-979797 fontSize-12">زمان ارسال:</div>
          <div className="fontWeight-500">2 تا 3 روز</div>
        </div>
        {/* <div className="d-flex flex-y-center text-right">
          <div className="col-4 colorGray-979797 fontSize-12">هزینه ارسال:</div>
          <div className="fontWeight-500">0</div>
        </div> */}
      </div>
      <div className="m-b-16 d-flex flex-y-center">
        <div className="colorGray-979797 col-3 text-right">تعداد:</div>
        <StockQuantity
          value={selectedProductCountToAdd}
          min={1}
          max={10}
          onChange={value => {
            setSelectedProductCountToAdd(value);
          }}
        />
      </div>
      <div className="d-flex flex-y-center flex-x-center m-b-16">
        <div className="m-l-16">قیمت نهایی:</div>
        <div className="d-flex flex-y-center">
          <div className="fontSize-24 fontWeight-700">
            {" "}
            {formatNumberToPrice(
              productHelpers.getProductFullPrice().price *
                selectedProductCountToAdd,
            )}
          </div>
          <div className="fontWeight-500 m-r-4">تومان</div>
        </div>
      </div>
      {/*      <Button
        color="red"
        size="large"
        radius="radius16"
        className={generateClassName(["col-12", style.addToCart])}>
        <span className={style.icon}>
          <Icon name="bag-cart" />
        </span>
        <span className="fontWeight-700 fontSize-20">افزودن به سبد خرید</span>
      </Button> */}
    </div>
  );
}
