import { useContext, useEffect, useState } from "react";
import { sdpContext } from "../../Container";
import WorkTimeServices from "../../Services/WorkTime";
import { IWorkTimeItems } from "../../../../infrastructure/Models/Entity/IWorkTimeItems";
import { IWorkTimeItemsActiveTimes } from "../../../../infrastructure/Models/Entity/IWorkTimeItemsActiveTimes";

interface IReturnUseGetWorkTimes {
  workTimes: IWorkTimeItems[];
  activeTimes: IWorkTimeItemsActiveTimes[];
  activeDayNum: number;
  selectDay: (activeDay: number) => void;
  generateDayNames(ele: any): string;
}
const useGetWorkTimes = () => {
  const contextSdp = useContext(sdpContext);

  const [workTimes, setWorkTimes] = useState<IWorkTimeItems[]>([]);
  const [activeTimes, setActiveTimes] = useState<IWorkTimeItemsActiveTimes[]>(
    [],
  );
  const [activeDayNum, setActiveDayNum] = useState(0);

  const getWorkTime = () => {
    WorkTimeServices.getWorkTime({ vendorId: contextSdp.Mieter.Id })
      .then(res => {
        if (res.data.IsSuccess) {
          for (let i = 0; i <= res.data.Data.Items.length; i += 1) {
            if (res.data.Data.Items[i].IsActive) {
              setActiveTimes(res.data.Data.Items[i].ActiveTimes);
              setActiveDayNum(i);
              break;
            }
          }
          setWorkTimes(res.data.Data.Items);
        }
      })
      .catch(_err => {});
  };

  const generateDayNames = (ele: any) => {
    switch (ele.WeekDayId) {
      case 1:
        return "شنبه";
      case 2:
        return "یک شنبه";
      case 3:
        return "دو شنبه";
      case 4:
        return "سه شنبه";
      case 5:
        return "چهار شنبه";
      case 6:
        return "پنج شنبه";
      default:
        return "جمعه";
    }
  };

  const selectDay = (
    activeDay: number,
    // newActiveTimes: IWorkTimeItemsActiveTimes[],
  ) => {
    setActiveDayNum(activeDay);
    setActiveTimes(workTimes[activeDay].ActiveTimes);
  };

  useEffect(() => {
    getWorkTime();
  }, []);

  const returnProps = (): IReturnUseGetWorkTimes => {
    return {
      activeDayNum,
      activeTimes,
      selectDay,
      workTimes,
      generateDayNames,
    };
  };
  return returnProps();
};

export default useGetWorkTimes;
