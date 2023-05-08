import React from "react";
import Link from "next/link";
import style from "./Summary.module.sass";
import Button from "../../../../../../../Share/Components/Common/Button/Button";
import ShowPrice from "../../../../../../../Share/Components/Common/ShowPrice/ShowPrice";
import useGetMieter from "../../../../../Hooks/Detail/GetMieter";
import useGetService from "../../../../../Hooks/Detail/GetService";
import Icon from "../../../../../../../Share/Components/Common/Icon/Icon";
import defaultProductAvatar from "../../../../../../../Resources/image/defaultServiceStore.jpg";
import Image from "../../../../../../../Share/Components/Common/Image/Image";
import formatVitrinLink from "../../../../../../../Share/Helpers/Links/formatVitrinLink";

const SummaryDesktop = () => {
  const Mieter = useGetMieter();
  const Service = useGetService();
  return (
    <div className={style.mieterBox}>
      <div className="fontSize-12 m-b-16">واحد تجاری این خدمت</div>
      <div className="avatar m-x-auto m-b-16">
        {Mieter.LogoPicture?.Url && (
          <Image
            width={100}
            height={100}
            src={Mieter.LogoPicture?.Url || defaultProductAvatar}
          />
        )}
      </div>
      <div className="fontWeight-700 fontSize-14">{Mieter?.StoreName}</div>
      <div className="d-flex flex-over-center m-b-16">
        <span className="colorGreen">تایید شده</span>
        <small className="colorGray-cbcbcb m-x-16">|</small>
        <span className="d-flex flex-y-center">
          <Icon name="star-fill" size="medium" className="m-l-8 m-b-2" />
          {Mieter.Rate}
        </span>
      </div>
      <ul className={style.infoCounter}>
        <li>
          <div className="fontSize-12 colorGray-979797">میزان رضایت</div>
          <div>
            <span className="fontWeight-700 fontSize-20">
              {Mieter.CustomerSatisfactionRate}
            </span>
            %
          </div>
        </li>
        <li>
          <div className="fontSize-12 colorGray-979797">پاسخ به چت</div>
          <div>
            <span className="fontWeight-700 fontSize-20">
              {Mieter.ReviewCount}
            </span>
            %
          </div>
        </li>
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
        {/*      <div className="col-5">
            <Button theme="bordered" className="col-12">
              <Icon name="m-chat" size="large" className="m-l-8" />
              <span className="fontSize-12 fontWeight-500">چت</span>
            </Button>
          </div> */}
      </div>
      <div className="m-b-8">
        <div className="d-flex flex-y-center text-right m-b-4">
          <div className="col-4 colorGray-979797 fontSize-12">نوع خدمت:</div>
          <div className="col-8 fontWeight-500">حضوری</div>
        </div>
        {!!Mieter?.PhoneNumber && (
          <div className="d-flex flex-y-center text-right m-b-4">
            <div className="col-4 colorGray-979797 fontSize-12">تلفن تماس:</div>
            <div className="col-8 fontWeight-500">{Mieter?.PhoneNumber}</div>
          </div>
        )}
        {!!Mieter?.Address && (
          <div className="d-flex flex-y-center text-right">
            <div className="col-4 colorGray-979797 fontSize-12">آدرس:</div>
            <div className="col-8 fontWeight-500">{Mieter?.Address}</div>
          </div>
        )}
      </div>
      {Service.service.Price !== 0 ? (
        <div className="m-b-16 d-flex flex-y-center">
          <ShowPrice
            price={Service.service.Price}
            oldPrice={Service.service.OldPrice}
          />
        </div>
      ) : (
        <>
          <div className="m-b-16 d-flex flex-y-center">
            <div className="m-l-16">از</div>
            <ShowPrice price={Service.service.PriceRangeFrom} size="small" />
          </div>
          <div className="m-b-16 d-flex flex-y-center">
            <div className="m-l-16">تا</div>
            <ShowPrice price={Service.service.PriceRangeTo} size="small" />
          </div>
        </>
      )}
    </div>
  );
};

export default SummaryDesktop;
