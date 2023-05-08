import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./ShortServiceBox.module.sass";
import { ELEMENTS } from "../../../../../Share/Constants/Dom/ELEMENTS";
import ShowPrice from "../../../../../Share/Components/Common/ShowPrice/ShowPrice";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import useGetMieter from "../../../Hooks/Detail/GetMieter";
import useGetService from "../../../Hooks/Detail/GetService";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import Button from "../../../../../Share/Components/Common/Button/Button";
import defaultServiceAvatar from "../../../../../Resources/image/defaultServiceStore.jpg";
import Image from "../../../../../Share/Components/Common/Image/Image";
import formatVitrinLink from "../../../../../Share/Helpers/Links/formatVitrinLink";

const ShortServiceBoxDesktop = () => {
  const Mieter = useGetMieter();
  const Service = useGetService();
  const [showBox, setShowBox] = useState<boolean>(false);

  useEffect(() => {
    const onScrollDocument = () => {
      const sdpOtherEl = document.getElementById(ELEMENTS.SDP_UNDER_DETAILS);
      const sdpOtherElyOffset = sdpOtherEl?.offsetTop ?? -1;
      const fixedHeaderEl = document.getElementById(ELEMENTS.HEADER);
      const marginBottom = 40;
      const over =
        window.pageYOffset + (fixedHeaderEl?.offsetHeight ?? 0) + marginBottom >
        sdpOtherElyOffset;
      if (over !== showBox) {
        setShowBox(over);
      }
    };
    window.addEventListener("scroll", onScrollDocument);
    onScrollDocument();

    return () => {
      window.removeEventListener("scroll", onScrollDocument);
    };
  }, [showBox]);
  return (
    <>
      <div
        className={generateClassName([
          style.serviceShortView,
          !showBox && style.hideBox,
        ])}>
        <div className="card p-24 m-b-16">
          <div className="fontSize-12 text-center m-b-8">
            واحد تجاری این خدمت
          </div>
          <div className="avatar m-x-auto m-b-8">
            <Image
              width={100}
              height={100}
              src={Mieter?.LogoPicture?.Url || defaultServiceAvatar}
            />
          </div>
          <div className="text-center fontWeight-700 m-b-4">
            {Mieter?.StoreName}
          </div>
          <div className="d-flex flex-over-center m-b-16">
            <span className="colorGreen">تایید شده</span>
            <small className="colorGray-cbcbcb m-x-16">|</small>
            <div className="d-flex flex-y-center">
              <Icon name="star-fill" size="small" className="m-l-4 m-b-4" />
              {Mieter?.Rate}
            </div>
          </div>
          <ul className={style.pointStep}>
            <li>
              <div className="fontSize-12 colorGray-979797">میزان رضایت</div>
              <div className="fontWeight-700 fontSize-20">
                {Mieter?.CustomerSatisfactionRate}
                <small className="fontWeight-300 fontSize-14 m-l-4">%</small>
              </div>
            </li>
            <li>
              <div className="fontSize-12 colorGray-979797">پاسخ به چت</div>
              <div className="fontWeight-700 fontSize-20">
                {Mieter?.ChatReplyRate}
                <small className="fontWeight-300 fontSize-14 m-l-4">%</small>
              </div>
            </li>
          </ul>
          <div className="row m-b-24 m-t-16">
            <div className="col-12">
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
            {/* <div className="col-5">
          <Button theme="bordered" className="col-12">
            <Icon name="m-chat" size="large" className="m-l-4" />
            <span className="fontSize-12 fontWeight-500">چت</span>
          </Button>
        </div> */}
          </div>
          {Mieter?.PhoneNumber && (
            <div className="d-flex m-b-4">
              <div className="col-4 colorGray-979797">نوع خدمت:</div>
              <div className="col-8">حضوری</div>
            </div>
          )}
          {Mieter?.PhoneNumber && (
            <div className="d-flex m-b-4">
              <div className="col-4 colorGray-979797">تلفن تماس:</div>
              <div className="col-8">{Mieter?.PhoneNumber}</div>
            </div>
          )}
          {Mieter?.Address && (
            <div className="d-flex m-b-4">
              <div className="col-4 colorGray-979797">آدرس:</div>
              <div className="col-8">{Mieter.Address}</div>
            </div>
          )}

          <div className="text-center">
            {Service?.service?.Price !== 0 ? (
              <div className="m-b-16 d-flex flex-y-center">
                <ShowPrice
                  price={Service?.service?.Price}
                  oldPrice={Service?.service?.OldPrice}
                />
              </div>
            ) : (
              <>
                <div className="m-b-16 d-flex flex-y-center">
                  <div className="m-l-16">از</div>
                  <ShowPrice
                    price={Service?.service?.PriceRangeFrom}
                    size="small"
                  />
                </div>
                <div className="m-b-16 d-flex flex-y-center">
                  <div className="m-l-16">تا</div>
                  <ShowPrice
                    price={Service?.service?.PriceRangeTo}
                    size="small"
                  />
                </div>
              </>
            )}
          </div>
        </div>
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
    </>
  );
};

export default ShortServiceBoxDesktop;
