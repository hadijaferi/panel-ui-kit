import React from "react";
import dynamic from "next/dynamic";
import style from "./Desktop.module.sass";
import TickImg from "../../../../../../Resources/image/Shop/tick.svg";
import Button from "../../../../../../Share/Components/Common/Button/Button";
import Icon from "../../../../../../Share/Components/Common/Icon/Icon";
import HeadMenu from "../../../../Components/HeadMenu/HeadMenu";
import useGetShop from "../../../../Hooks/useGetShop";
import Image from "../../../../../../Share/Components/Common/Image/Image";
import useMenuItems from "../../../../Hooks/useMenuItems";
import image from "./test/image/profileTest.png";
import TimeSheet from "../TimeSheet/TimeSheet";

const MapPreview = dynamic(
  () => import("../../../../Components/MapPreview/MapPreview"),
  {
    ssr: false,
  },
);

export default function Header() {
  const useShop = useGetShop();
  const useMenu = useMenuItems();
  return (
    <>
      <div className={style.section}>
        <div className={style.layout}>
          <div className={style.headBox}>
            <Image src={useShop.vitrinBase?.Picture?.Url} />
            <div className={style.shopStateBox}>
              <div className={style.dot} />
              <span className="fontWeight-700 fontSize-18 text-right colorWhite">
                الان باز است
              </span>
            </div>
            <div className={style.connectStore}>
              <p className="m-b-16 fontWeight-700 fontSize-14">
                ارتباط با فروشگاه
              </p>
              <div className={style.map}>
                <MapPreview position={[0, 0]} />
              </div>
              <ul className={style.contactContent}>
                <li className={style.infoShop}>
                  <span className="fontWeight-700 fontSize-14 m-l-16">
                    آدرس :
                  </span>
                  <span className="fontSize-14">
                    {useShop.vitrinBase?.StoreInfo.DisplayAddress}
                  </span>
                </li>
                <li className={style.infoShop}>
                  <span className="fontWeight-700 fontSize-14 m-l-16">
                    شماره تلفن :
                  </span>
                  <span className="fontSize-14">
                    {useShop.vitrinBase?.StoreInfo.Phone}
                  </span>
                </li>
                <li className={style.infoShop}>
                  <TimeSheet />
                </li>
              </ul>
              <hr className="m-t-16 m-b-32" />

              <ul className={style.percentageBox}>
                <li className="d-flex flex-x-center flex-column flex-y-center">
                  <span>میزان رضایت</span>
                  <span className="fontWeight-700 fontSize-20">87%</span>
                </li>
                <li className="d-flex flex-x-center flex-column flex-y-center">
                  <span>پاسخ به چت</span>
                  <span className="fontWeight-700 fontSize-20">78%</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.parentProfile}>
              <div className={style.profileServiceShop}>
                <Image src={image} alt="" />
                {useShop.vitrinBase?.IsVerify && (
                  <div className={style.tickImg}>
                    <Image src={TickImg} alt="" />
                  </div>
                )}
              </div>
            </div>

            <div className={style.titleBox}>
              <span className="fontWeight-700 , fontSize-32">
                {useShop.vitrinBase?.StoreName}
              </span>
              {/* <span className={style.followers}>2931 دنبال کننده</span> */}
            </div>
            <p className={style.description}>
              {useShop.vitrinBase?.ShortDescription}
            </p>
            {/* <Button theme="text" className={style.followBtn}> */}
            {/*  دنبال کردن */}
            {/* </Button> */}
          </div>
          <div className={style.menuBox}>
            <div className={style.right}>
              {/* <div className={style.category}>
                دسته بندی خدمات &nbsp;&nbsp;
                <Icon name="angle-down" />
              </div> */}
              <HeadMenu menuItems={useMenu.items} />
            </div>
            <div className={style.left}>
              <Button className={style.chatBtn} theme="text">
                <Icon size="large" className="m-l-8" name="chat" />
                <span className="d-flex flex-y-center">چت با سرویس دهنده</span>
              </Button>
              <Button theme="text" className={style.shareBtn}>
                <Icon size="large" name="share" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
