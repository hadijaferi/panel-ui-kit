import React, { FC } from "react";
import style from "./VitrinCover.module.sass";
import Icon from "../../../../../../../Share/Components/Common/Icon/Icon";
import ButtonLink from "../../../../../../../Share/Components/Common/Button/ButtonLink";
import useGetShop from "../../../../../Hooks/useGetShop";
import HeadMenu from "../../../../../Components/HeadMenu/HeadMenu";
import useMenuItems from "../../../../../Hooks/useMenuItems";
import TickImg from "../../../../../../../Resources/image/Shop/tick.svg";
import Image from "../../../../../../../Share/Components/Common/Image/Image";
import image from "../../../../../Service/Desktop/Components/Header/test/image/profileTest.png";

const VitrinCover: FC = () => {
  const useShop = useGetShop();
  const useMenu = useMenuItems();
  return (
    <div className={style.vitrinCover}>
      <div
        className={style.top}
        style={{ backgroundImage: `url(${useShop.vitrinBase?.Picture.Url})` }}>
        <div className={style.vitrinInfo}>
          <div className={style.parentProfile}>
            <div className={style.profileProductShop}>
              <Image src={image} alt="" />
              {useShop.vitrinBase?.IsVerify && (
                <div className={style.tickImg}>
                  <Image src={TickImg} alt="" />
                </div>
              )}
            </div>
          </div>
          <div className={style.left}>
            <h3 className={style.name}>{useShop.vitrinBase?.StoreName}</h3>
            <div>
              {/* <span>{useShop.vitrinBase?.FollowerCount} دنبال کننده</span> */}
              <span>{useShop.vitrinBase?.CommentCount} نظر</span>
            </div>
          </div>
        </div>
        <div className={style.btns}>
          <ButtonLink href="#0">
            <Icon name="chat" />
          </ButtonLink>
          <ButtonLink href="#0">
            <Icon name="share" />
          </ButtonLink>
        </div>
      </div>
      <div className={style.bottom}>
        {/* <Button color="red" className="m-t-16 m-r-32"> */}
        {/*  <span className="p-4 fontWeight-500 fontSize-12"> */}
        {/*    <Icon name="plus" className="m-l-8" /> */}
        {/*    دنبال کردن */}
        {/*  </span> */}
        {/* </Button> */}
        <div className="p-t-8">
          <HeadMenu menuItems={useMenu.items} />
        </div>
      </div>
    </div>
  );
};

export default VitrinCover;
