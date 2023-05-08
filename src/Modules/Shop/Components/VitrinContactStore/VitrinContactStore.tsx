import React, { FC, useState } from "react";
import Skeleton from "react-loading-skeleton";
import dynamic from "next/dynamic";
import style from "./VitrinContactStore.module.sass";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import { IBaseComponentProps } from "../../../../infrastructure/Models/IBaseComponent";
import TimeSheet from "../../Service/Desktop/Components/TimeSheet/TimeSheet";

interface IVitrinContactStoreProps extends IBaseComponentProps {
  activeTab?: number;
}

const MapPreview = dynamic(
  () => import("../../Components/MapPreview/MapPreview"),
  {
    ssr: false,
  },
);
const VitrinContactStore: FC<IVitrinContactStoreProps> = props => {
  const [loading] = useState(false);

  const renderContact = () => {
    return (
      <div
        className={generateClassName([
          style.vitrinContactStore,
          props.className,
        ])}>
        <div className={generateClassName([style.top])}>
          <div className="fontWeight-700 m-b-16">ارتباط با فروشگاه</div>
          <div className={style.map}>
            <MapPreview position={[0, 0]} />
          </div>
          <div className={style.infoShop}>
            <span className="fontWeight-700 m-l-8">آدرس :</span>
            <span>تهران الهیه خیابان فرشته مجتمع رویال ادرس</span>
          </div>
          <div className={style.infoShop}>
            <span className="fontWeight-700 m-l-8">شماره تلفن :</span>
            <span>0912509357</span>
          </div>
          <TimeSheet />
          <ul className={style.status}>
            <li>
              <div className={style.title}>میزان رضایت</div>
              <div>
                <span className="fontWeight-700 fontSize-20">10</span>%
              </div>
            </li>
            <li>
              <div className={style.title}>ارسال به موقع</div>
              <div>
                <span className="fontWeight-700 fontSize-20">10</span>%
              </div>
            </li>
            <li>
              <div className={style.title}>پاسخ به چت</div>
              <div>
                <span className="fontWeight-700 fontSize-20">20</span>%
              </div>
            </li>
          </ul>
        </div>
        {/* <Button className={style.report}>گزارش تخلف</Button> */}
      </div>
    );
  };
  const renderLoading = () => {
    return <Skeleton className={style.skeleton} />;
  };
  return loading ? renderLoading() : renderContact();
};

export default VitrinContactStore;
