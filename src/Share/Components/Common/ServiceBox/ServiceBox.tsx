import React, { Component } from "react";
import Link from "next/link";
import style from "./ServiceBox.module.sass";
import loadingPhoto from "../../../../Resources/image/defaultPhoto.jpg";
import { IService } from "../../../../infrastructure/Models/Entity/IService";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import { discountPercent } from "../../../Helpers/formatPercent";
import Icon from "../Icon/Icon";
import Price from "../Price/Price";
import Image from "../Image/Image";

interface IProps {
  service: Partial<IService>;
  link: {
    href: string;
    as?: string;
  };
}

class ServiceBox extends Component<IProps, any> {
  render() {
    const { service, link } = this.props;
    return (
      <Link href={link.href} as={link?.as}>
        <div className={generateClassName([style.acProductBox, "card"])}>
          <div className={style.photo}>
            <Image src={service.Picture?.Url || loadingPhoto} alt="" />
          </div>
          <div className="d-flex flex-column flex-x-between p-x-16">
            <span className={style.title}>{service?.Name}</span>
            <div className={style.body}>
              <div className="d-flex flex-x-between flex-y-center w100">
                {service.OldPrice ? (
                  <div className={style.discountPercent}>
                    <div className="m-t-2">
                      {discountPercent(service.Price, service.OldPrice)}
                      <small>%</small>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="d-flex flex-x-between flex-y-center flex-y-end w100">
                <div>
                  <span className="m-l-4">{service?.Rate}</span>
                  <Icon name="star" className="m-b-2" />
                </div>
                <div className="fontWeight-700 fontSize-18">
                  <Price price={service.Price || 0} />
                </div>
              </div>
            </div>
          </div>
          <div className={style.footer}>
            <div className="p-x-16">
              <div className="d-flex">
                <div className="colorGray-5e5e5e fontSize-12">
                  <span className="m-l-4">{service.Mieter?.Name}</span>
                  {service.Mieter?.Rate ? (
                    <span>( {service.Mieter?.Rate} امتیاز )</span>
                  ) : null}
                </div>
              </div>
              <span className="colorGray-979797 fontSize-12">
                {service.Mieter?.CityName}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ServiceBox;
