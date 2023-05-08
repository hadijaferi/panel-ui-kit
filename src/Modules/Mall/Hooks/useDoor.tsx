import { useContext } from "react";
import { mallContext } from "../Container";

const useDoor = () => {
  const contextMall = useContext(mallContext);
  const toggle = (isOpen?: boolean) => {
    if (isOpen !== undefined) {
      contextMall.setOpenDoor(isOpen);
    } else {
      contextMall.setOpenDoor(!contextMall.isOpenDoor);
    }
  };
  return {
    toggle,
    isOpen: contextMall.isOpenDoor,
  };
};

export default useDoor;
