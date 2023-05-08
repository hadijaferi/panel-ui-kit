import React from "react";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";
import useGetWorkTimes from "../../../Hooks/Detail/GetWorkTimes";
import style from "./WorkTime.module.sass";

const WorkTimeMobile = () => {
  const WorkTime = useGetWorkTimes();

  return WorkTime.workTimes.length ? (
    <div className={style.weekParent}>
      <div className="container">
        <div className="scroll-x p-r-4 p-y-8">
          <div className="d-flex">
            {WorkTime.workTimes?.map((ele, i) => {
              return (
                <div
                  key={ele.Id}
                  onClick={() => {
                    WorkTime.selectDay(i);
                  }}
                  className={generateClassName([
                    style.weekItem,
                    WorkTime.activeDayNum === i && style.active,
                    !ele.IsActive && style.disable,
                  ])}>
                  <span
                    className={generateClassName([
                      WorkTime.activeDayNum === i && style.activeDayName,
                      "colorGray-979797",
                    ])}>
                    {WorkTime.generateDayNames(ele)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex flex-wrap ">
          {WorkTime.activeTimes?.map((ele, index) => {
            return (
              <div
                key={index + ele.EndMinute}
                className="d-flex col-12 m-x-8 fontSize-14 colorGray-979797">
                <span>
                  {ele.StartMinute} : {ele.StartHour}
                </span>
                <span className="p-x-8"> الی </span>
                <span>
                  {ele.EndMinute} : {ele.EndHour}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : null;
};

export default WorkTimeMobile;
