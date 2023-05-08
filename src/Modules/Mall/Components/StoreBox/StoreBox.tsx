import React from "react";
import style from "./StoreBox.module.sass";
import { IBaseProps } from "../../../../Share/Models/IBaseProps";
import Icon from "../../../../Share/Components/Common/Icon/Icon";
import Button from "../../../../Share/Components/Common/Button/Button";
import testStoreImg from "./img/1.jpg";
import mieterLogo from "./img/2.jpg";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";

type boxType = "standard" | "silver" | "gold" | "diamond";
// enum storeTypes {
//   standard,
//   silver,
//   gold,
//   diamond,
// }

export interface IStoreBoxProps extends IBaseProps {
  // store: Partial<IStore>;
  boxTYpe: boxType;
}

// style[`${storeTypes[(props?.store?.PackageId || 0) - 1]}Type`],

// const returnPackage = (typePackage: storeTypes) => {
//   switch (typePackage) {
//     case storeTypes.diamond:
//       return RingDiamond;
//     case storeTypes.gold:
//       return RingGold;
//     case storeTypes.silver:
//       return RingSilver;
//     default:
//       return RingStandard;
//   }
// };

const StoreBox = React.memo((props: IStoreBoxProps) => {
  // const Content = () => {
  //   return (
  //     <div
  //       className={generateClassName([
  //         style[`${storeTypes[(props?.store?.PackageId || 0) - 1]}Type`],
  //       ])}>
  //       <div className={style.content}>
  //         <div className={style.photoStore}>
  //           <div className={style.lines} />
  //           <span />
  //           <div className={style.overlay} />
  //           <Image src={props?.store?.VitrinPicture?.Url} alt="" />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    // <div className={`col-${props.colNumber}`}>
    <div
      className={generateClassName([
        style.TypeParent,
        style[`${props.boxTYpe}Type`],
      ])}>
      <div className={style.boxWrap}>
        <div className={style.header}>
          <div
            className={style.logo}
            style={{ backgroundImage: `url(${mieterLogo})` }}
          />
          <div className="d-flex flex-x-between flex-y-center p-y-8">
            <div className="d-flex">
              <Icon name="m-location" size="large" className="m-l-8" />
              <span className={style.locText}>تهران ، فرشته ، جوادیه</span>
            </div>
            <div className="d-flex">
              <Button theme="iconic" size="medium">
                <Icon name="m-chat" size="large" />
              </Button>
              <Button theme="iconic" size="medium">
                <Icon name="user-plus" size="large" />
              </Button>
            </div>
          </div>
          <strong className={style.title}>خدمات آرایشگاه سوسن جون</strong>
        </div>
        <div
          className={style.storeView}
          style={{ backgroundImage: `url(${testStoreImg})` }}>
          <div className={style.doors}>
            <span>ورود به فروشگاه</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default StoreBox;
