import React from "react";
import style from "./Desktop.module.sass";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import useGetShop from "../../Hooks/useGetShop";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import TimeSheet from "../../Service/Desktop/Components/TimeSheet/TimeSheet";

export default function About() {
  const MapComponent = dynamic(
    () =>
      import("../../../../Share/Components/Common/MapComponent/MapComponent"),
    { ssr: false },
  );
  const shopCtx = useGetShop();
  const times = shopCtx.vitrinBase?.StoreInfo.WorkingTime.TimePeriods;
  return (
    <>
      <div className="container">
        <div className={style.head}>
          <div className={style.right}>
            <div>
              <ul className={style.counter}>
                <li>{shopCtx.vitrinBase?.FollowerCount} دنبال کننده </li>
                {/* <li>0 محصول</li> */}
              </ul>
            </div>
            <div className="d-flex m-r-64">
              <TimeSheet />
            </div>
          </div>
          <div className={style.left}>
            <ul>
              <li>
                <span className="fontSize-16 fontWeight-500 ">میزان رضایت</span>
                <span className="fontSize-24 fontWeight-700 m-r-16">
                  0<span className="fontSize-18 fontWeight-500">%</span>
                </span>
              </li>
              <li>
                <span className="fontSize-16 fontWeight-500">
                  ارسال به موقع
                </span>
                <span className="fontSize-24 fontWeight-700 m-r-16">
                  0<span className="fontSize-18 fontWeight-500">%</span>
                </span>
              </li>
              <li>
                <span className="fontSize-16 fontWeight-500">پاسخ به چت</span>
                <span className="fontSize-24 fontWeight-700 m-r-16">
                  0<span className="fontSize-18 fontWeight-500">%</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-x-between m-t-16">
          <div className={style.content}>
            <p className="m-b-24 fontSize-16 fontWeight-700">درباره ما</p>
            <p className="fontSize-14 fontWeight-500 colorBlack-4e4e4e">
              {shopCtx.vitrinBase?.Description}
            </p>
          </div>
          <div className={style.content}>
            <p className="m-b-24 fontWeight-700 fontSize-16">راه های ارتباطی</p>
            <div className="row">
              <div className={generateClassName(["col-8", style.mapContainer])}>
                <MapComponent />
              </div>
              <div className="col-4">
                <ul>
                  <li className="m-b-16">
                    <span className="fontSize-14 fontWeight-700 m-l-16">
                      آدرس :
                    </span>
                    <span>تهران ،الهیه،خیابان فرشته ، مجتمع رویال آدرس</span>
                  </li>
                  <li className="m-b-16">
                    <span className="fontSize-14 fontWeight-700 m-l-16">
                      شماره تلفن :{" "}
                    </span>
                    <span>{shopCtx.vitrinBase?.StoreInfo.Phone}</span>
                  </li>
                  {!!times?.length && (
                    <li className="m-b-16 d-flex">
                      <span className="fontSize-14 fontWeight-700 m-l-16">
                        ساعت کاری :
                      </span>
                      <ul>
                        {times?.map(time => (
                          <li>
                            <span className=" fontSize-14 fontWeight-700">
                              {time.StartHour}:{time.EndMinute}-{time.EndHour}:
                              {time.EndMinute}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
