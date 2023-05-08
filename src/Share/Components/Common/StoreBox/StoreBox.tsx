import React, { Component } from "react";
import Link from "next/link";
import style from "./StoreBox.module.sass";
import { IMieter } from "../../../../infrastructure/Models/Entity/IMieter";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import ButtonLink from "../Button/ButtonLink";
import defaultImageProduct from "../../../../Resources/image/defaultStore.jpg";
import Image from "../Image/Image";

interface IStoreBoxProps {
  store: IMieter;
  link: {
    href: string;
    as: string;
  };
}

class StoreBox extends Component<IStoreBoxProps> {
  render() {
    const {
      Address,
      LogoPicture,
      ProductPictures,
      Score,
      Slogan,
      StoreName,
    } = this.props.store;
    return (
      <Link href={this.props.link.href} as={this.props.link?.as}>
        <div className={generateClassName(["card", style.acStoreBox])}>
          <div className={style.head}>
            <div className={style.wrapperPicture}>
              {ProductPictures?.map(ele => {
                return (
                  <div className={style.productPicture} key={ele.Id}>
                    <Image src={ele.ThumbUrl || defaultImageProduct} alt="" />
                  </div>
                );
              })}
            </div>
            <div
              className={generateClassName([
                style.profileShop,
                "avatar avatar__medium",
              ])}>
              <Image
                src={LogoPicture?.ThumbUrl || defaultImageProduct}
                alt=""
              />
            </div>
          </div>
          <div className={style.body}>
            <span className={style.titleStore}>{StoreName || ""}</span>
            <span className="fontSize-12 m-t-8">{Slogan || ""}</span>
          </div>
          <div>
            <div className={style.infoStore}>
              <span className="fontWeight-500 text-right">{Address || ""}</span>
              <div className={style.rate}>
                <span>{Score || ""}</span>
              </div>
            </div>
            <ButtonLink href="/" color="blue" className={style.button}>
              ورود به ویترین
            </ButtonLink>
          </div>
        </div>
      </Link>
    );
  }
}

export default StoreBox;
