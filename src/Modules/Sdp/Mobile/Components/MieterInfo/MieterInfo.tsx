import React from "react";
import useGetMieter from "../../../Hooks/Detail/GetMieter";
import useGetService from "../../../Hooks/Detail/GetService";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import Button from "../../../../../Share/Components/Common/Button/Button";
import ButtonLink from "../../../../../Share/Components/Common/Button/ButtonLink";
import style from "./MieterInfo.module.sass";
import imageDefaultStore from "../../../../../Resources/image/defaultServiceStore.jpg";
import Image from "../../../../../Share/Components/Common/Image/Image";
import formatVitrinLink from "../../../../../Share/Helpers/Links/formatVitrinLink";

const MieterInfoMobile = () => {
  const Mieter = useGetMieter();
  const Service = useGetService();
  return (
    <div className="card card__noRadius p-y-16">
      <div className="container">
        <div className="d-flex flex-x-between flex-y-start m-b-24">
          <div className="d-flex">
            <Image
              className="avatar"
              width={54}
              height={54}
              src={Service?.service?.Picture?.Url || imageDefaultStore}
            />
            <div className="d-flex flex-column flex-x-between p-y-4 m-r-8">
              <div className="fontWeight-700">فروشگاه ا {Mieter?.Name}</div>
              <div className="d-flex flex-y-center">
                <div className="colorGreen">تایید شده</div>
                <small className="colorGray-cbcbcb m-x-8">|</small>
                <div className="d-flex flex-y-center">
                  <Icon name="m-star" size="medium" className="m-l-8 m-b-2" />
                  <span>{Service.service.Rate || 0}</span>
                </div>
              </div>
            </div>
          </div>
          <Button theme="bordered" color="blue" className="col-2">
            چت
          </Button>
        </div>
        <ul className={style.MieterInfoCounter}>
          <li>
            <div>میزان رضایت</div>
            <div>
              <span className="fontWeight-700 fontSize-20">
                {Mieter.CustomerSatisfactionRate}
              </span>
              %
            </div>
          </li>
          <li>
            <div>پاسخ به چت</div>
            <div>
              <span className="fontWeight-700 fontSize-20">
                {Mieter.ChatReplyRate}
              </span>
              %
            </div>
          </li>
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
};

export default MieterInfoMobile;
