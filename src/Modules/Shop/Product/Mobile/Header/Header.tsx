import React, { useState } from "react";
import style from "./Header.module.sass";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import Image from "../../../../../Share/Components/Common/Image/Image";
import verify from "../../../../../Resources/image/Shop/tick.svg";
import Button from "../../../../../Share/Components/Common/Button/Button";
import HeadMenu from "../../../Components/HeadMenu/HeadMenu";
import useMenuItems from "../../../Hooks/useMenuItems";
import useGetShop from "../../../Hooks/useGetShop";

export default function Header() {
  const useMenu = useMenuItems();
  const shopCtx = useGetShop();

  const [showMore, toggleShowMore] = useState(false);
  return (
    <div
      className={generateClassName([
        style.productShopHeader,
        "card card__noRadius",
      ])}>
      <div className={style.shopCover}>
        <Image src={shopCtx.vitrinBase?.Picture?.Url} alt="" />

        {!shopCtx.vitrinBase?.Picture?.Url && (
          <div className={style.title}>{shopCtx.vitrinBase?.StoreName}</div>
        )}
        {/* <Image src={} alt=""/> */}
      </div>
      <div className={style.centerSection}>
        <div className={style.infoSection}>
          <div className={style.avatar}>
            <div className="avatar avatar__medium">
              {/* <Image src={} alt={}/> */}
            </div>
          </div>
          <div className="d-flex align-self-center w100">
            <div className={style.infoItem}>
              <div className="fontWeight-700 fontSize-18">0</div>
              <div className="fontWeight-500 fontSize-12">کالا ها</div>
            </div>
            <div className={style.infoItem}>
              <div className="fontWeight-700 fontSize-18">0</div>
              <div className="fontWeight-500 fontSize-12">دنبال کننده</div>
            </div>
            <div className={style.infoItem}>
              <div className="fontWeight-700 fontSize-18">
                {shopCtx.vitrinBase?.CommentCount}
              </div>
              <div className="fontWeight-500 fontSize-12">نظر</div>
            </div>
          </div>
        </div>
        <div className={style.IntroductionShop}>
          <div className={style.shopName}>
            <span>{shopCtx.vitrinBase?.StoreName}</span>
            {shopCtx.vitrinBase?.IsVerify && (
              <div className={style.verify}>
                <Image src={verify} alt="" />
              </div>
            )}
          </div>
          <div>
            <p
              className={generateClassName([
                style.descriptionContent,
                showMore && style.showMore,
              ])}>
              {shopCtx.vitrinBase?.Description}
            </p>
            <Button
              theme="forButtonLink"
              color="blue"
              onClick={() => toggleShowMore(!showMore)}
              className="fontWeight-700">
              مشاهده {showMore ? "کمتر" : "بیشتر"}
            </Button>
          </div>
        </div>
        <div className="col-12">
          <Button
            size="medium"
            theme="bordered"
            className="col-12 fontWeight-700">
            چت
          </Button>
        </div>
      </div>
      <hr className="m-t-16" />
      <div className="p-x-16 scroll-x">
        <HeadMenu menuItems={useMenu.items} />
      </div>
    </div>
  );
}
