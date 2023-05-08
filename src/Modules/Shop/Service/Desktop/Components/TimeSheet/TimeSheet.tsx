import React, { useState } from "react";
import useOnClickOutside from "use-onclickoutside";
import Icon from "../../../../../../Share/Components/Common/Icon/Icon";
import generateClassName from "../../../../../../Share/Helpers/Dom/generateClassName";
import style from "./TimeSheet.module.sass";
import useGetShop from "../../../../Hooks/useGetShop";

const TimeSheet = () => {
  const [isOpen, toggleOpen] = useState(false);
  const ref = React.useRef<any>();
  useOnClickOutside(ref, () => toggleOpen(false));
  const shopCtx = useGetShop();
  const times = shopCtx.vitrinBase?.StoreInfo.WorkingTime.TimePeriods;
  return (
    <div ref={ref} className="pos-relative">
      <div
        onClick={() => {
          if (times?.length) {
            toggleOpen(!isOpen);
          }
        }}>
        <span className="fontWeight-700 fontSize-14 m-l-16">ساعت کاری :</span>
        <span
          className={generateClassName([
            "fontSize-14 fontWeight-700 m-l-8",
            shopCtx.vitrinBase?.StoreInfo.WorkingTime.IsOpen
              ? "colorGreen-41bfb9"
              : "colorGray-5e5e5e",
          ])}>
          {shopCtx.vitrinBase?.StoreInfo.WorkingTime.IsOpen
            ? "باز است"
            : "بسته است"}
        </span>
        <span className="m-l-8">
          {times?.[0]
            ? `${times[0].StartHour}:${times[0].StartMinute} ${times[0].EndHour}:${times[0].EndMinute}`
            : `00:00`}
        </span>
        {!!times?.length && (
          <Icon
            name="chevron-down"
            size="large"
            className={generateClassName([
              style.icon,
              isOpen && style.active,
              "m-b-2",
            ])}
          />
        )}
      </div>

      <div
        className={generateClassName([
          style.collapse,
          "card",
          isOpen && style.active,
        ])}>
        {times?.map(time => (
          <div>
            {time.StartHour}:{time.StartMinute} {time.EndHour}:{time.EndMinute}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSheet;
