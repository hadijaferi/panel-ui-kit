import React, { Component } from "react";
import Link from "next/link";
import style from "./CustomBox.module.sass";
import loadingPhoto from "../../../../Resources/image/defaultPhoto.jpg";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import { discountPercent } from "../../../Helpers/formatPercent";
import Icon from "../Icon/Icon";
import Price from "../Price/Price";
import { IProduct } from "../../../../infrastructure/Models/Entity/IProduct";
import formatProductLink from "../../../Helpers/Links/formatProductLink";
import { LINKS } from "../../../Constants/LINKS";
import { IService } from "../../../../infrastructure/Models/Entity/IService";
import Image from "../Image/Image";

type productTheme = "mobile";
type Types = "service" | "product";

interface IProps {
  entity: Partial<IService> & Partial<IProduct>;
  type: Types;
  theme?: productTheme;
}

class CustomBox extends Component<IProps> {
  render() {
    const { entity, type } = this.props;
    const entityHref =
      type === "product"
        ? formatProductLink(LINKS.PRODUCT, entity)
        : formatProductLink(LINKS.SERVICE, entity);
    return (
      <div
        className={generateClassName([
          style.acProductBox,
          style[`acTheme-${this.props.theme}`],
          "card",
        ])}>
        <Link href={entityHref}>
          <a>
            <div className={style.photo}>
              <Image src={entity.Picture?.Url || loadingPhoto} alt="" />
            </div>
            <div
              className={generateClassName([
                style.content,
                "d-flex flex-column flex-x-between p-x-16",
              ])}>
              <span className={style.title}>{entity?.Name}</span>
              <div className={style.body}>
                <div className="d-flex flex-x-between flex-y-center w100">
                  {entity.OldPrice ? (
                    <div className={style.discountPercent}>
                      <div className="m-t-2">
                        {discountPercent(entity.Price, entity.OldPrice)}
                        <small>%</small>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="d-flex flex-x-between flex-y-center flex-y-end w100">
                  <div>
                    <span className="m-l-4">{entity?.Rate}</span>
                    <Icon name="star" className="m-b-2" />
                  </div>
                  <div className="fontWeight-700 fontSize-18">
                    <Price price={entity.Price || entity.PriceRangeFrom || 0} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
        {entity.Mieter && (
          <div className={style.footer}>
            <div className="p-x-16">
              <div className="d-flex">
                <div className="colorGray-5e5e5e fontSize-12">
                  <span className="m-l-4">{entity.Mieter?.StoreName}</span>
                  {entity.Mieter?.Rate ? (
                    <span>( {entity.Mieter?.Rate} امتیاز )</span>
                  ) : null}
                </div>
              </div>
              <span className="colorGray-979797 fontSize-12">
                {entity.Mieter?.CityName}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CustomBox;
