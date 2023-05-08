import React, { Component } from "react";
import Link from "next/link";
import style from "./ProductBox.module.sass";
import loadingPhoto from "../../../../Resources/image/defaultPhoto.jpg";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import { discountPercent } from "../../../Helpers/formatPercent";
import Icon from "../Icon/Icon";
import Price from "../Price/Price";
import { IProduct } from "../../../../infrastructure/Models/Entity/IProduct";
import Image from "../Image/Image";

type productTheme = "mobile";

interface IProps {
  product: Partial<IProduct>;
  link: string;
  theme?: productTheme;
}

class ProductBox extends Component<IProps> {
  render() {
    const { product, link } = this.props;
    return (
      <Link href={link}>
        <a>
          <div
            className={generateClassName([
              style.acProductBox,
              "acProductBox",
              style[`acTheme-${this.props.theme}`],
              "card",
            ])}>
            <div className={style.photo}>
              <Image src={product.Picture?.Url || loadingPhoto} alt="" />
            </div>
            <div
              className={generateClassName([
                style.content,
                "d-flex flex-column flex-x-between p-x-16",
              ])}>
              <span className={style.title}>{product?.Name}</span>
              <div className={style.body}>
                <div className="d-flex flex-x-between flex-y-center w100">
                  {product.OldPrice ? (
                    <div className={style.discountPercent}>
                      <div className="m-t-2">
                        {discountPercent(product.Price, product.OldPrice)}
                        <small>%</small>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="d-flex flex-x-between flex-y-center flex-y-end w100">
                  <div>
                    <span className="m-l-4">{product?.Rate}</span>
                    <Icon name="star" className="m-b-2" />
                  </div>
                  <div className="fontWeight-700 fontSize-18">
                    <Price price={product.Price || 0} />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.footer}>
              <div className="p-x-16">
                <div className="d-flex">
                  <div className="colorGray-5e5e5e fontSize-12">
                    <span className="m-l-4">{product.Mieter?.StoreName}</span>
                    {product.Mieter?.Rate ? (
                      <span>( {product.Mieter?.Rate} امتیاز )</span>
                    ) : null}
                  </div>
                </div>
                <span className="colorGray-979797 fontSize-12">
                  {product.Mieter?.CityName}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    );
  }
}

export default ProductBox;
