import { useContext } from "react";
import { useRouter } from "next/router";
import { mallContext } from "../Container";
import FloorServices from "../Services/Floor";

const useFloor = () => {
  const contextMall = useContext(mallContext);
  const router = useRouter();
  const setFloorSelected = (Id?: number) => {
    const floorId = Id ?? router.query.floor;
    if (floorId) {
      const selectedFloor = contextMall.floors.find(value => {
        return value.Id === Number(floorId);
      });
      if (selectedFloor) {
        contextMall.setSelectedFloor({ ...selectedFloor });
      }
    }
  };
  const getFloorList = () => {
    FloorServices.getFloorList().then((res: any) => {
      if (res.data.IsSuccess) {
        contextMall.setFloors(res.data.Data.Floors);
      }
    });
  };
  return {
    getFloorList,
    setFloorSelected,
    FloorSelected: contextMall.selectedFloor,
    floorList: contextMall.floors,
  };
};

export default useFloor;
