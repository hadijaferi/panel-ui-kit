import React from "react";
import ButtonLink from "../../../../../../../Share/Components/Common/Button/ButtonLink";
import style from "../../Detail.module.sass";
import { usePdpProductDetails } from "../../../../../Hooks/usePdpProductId";
import Icon from "../../../../../../../Share/Components/Common/Icon/Icon";
import formatVitrinLink from "../../../../../../../Share/Helpers/Links/formatVitrinLink";

export default function PdpMieterInfoMobile() {
  const product = usePdpProductDetails();
  return (
    <div className="card card__noRadius p-y-16">
      <div className="container">
        <div className="d-flex flex-x-between flex-y-start m-b-24">
          <div className="d-flex">
            <div
              className="avatar m-l-8"
              style={{
                background: product?.Product?.Picture?.ThumbUrl,
              }}
            />
            <div className="d-flex flex-column flex-x-between p-y-4">
              <div className="fontWeight-700">
                فروشگاه ا {product?.Mieter?.Name}
              </div>
              <div className="d-flex flex-y-center">
                <div className="colorGreen">تایید شده</div>
                <small className="colorGray-cbcbcb m-x-8">|</small>
                <div className="d-flex flex-y-center">
                  <Icon name="m-star" size="medium" className="m-l-8 m-b-2" />
                  <span>{product?.Mieter.Rate}</span>
                </div>
              </div>
            </div>
          </div>
          {/*          <Button theme="bordered" color="blue" className="col-2">
            چت
          </Button> */}
        </div>
        <ul className={style.MieterInfoCounter}>
          <li>
            <div>میزان رضایت</div>
            <div>
              <span className="fontWeight-700 fontSize-20">
                {product?.Mieter.CustomerSatisfactionRate}
              </span>
              %
            </div>
          </li>
          <li>
            <div>ارسال به موقع</div>
            <div>
              <span className="fontWeight-700 fontSize-20">
                {product?.Mieter.OnTimeDeliveryRate}
              </span>
              %
            </div>
          </li>
          {/*          <li>
            <div>پاسخ به چت</div>
            <div>
              <span className="fontWeight-700 fontSize-20">
                {product?.Mieter.ChatReplyRate}
              </span>
              %
            </div>
          </li> */}
        </ul>
        <hr className="m-y-16" />
        <div className="d-flex flex-x-center">
          <ButtonLink
            href={formatVitrinLink("unknown")}
            color="blue"
            className="fontSize-16 fontWeight-700">
            مشاهده واحد تجاری
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
