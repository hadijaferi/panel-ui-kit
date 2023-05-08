import React, { useState } from "react";
import dynamic from "next/dynamic";
import { IMallContext, Sections, Theme } from "./Models/IContext";
// colors theme
import style from "./Theme.module.sass";
import { IFloor } from "../../infrastructure/Models/Entity/IFloor";
import BaseResponsive from "../../infrastructure/BaseComponents/BaseResponsive";
import generateClassName from "../../Share/Helpers/Dom/generateClassName";

// import dynamic pages
const Mobile = dynamic(() => import("./Mobile/Mall"));
const Desktop = dynamic(() => import("./Desktop/Mall"));

export const mallContext = React.createContext({} as IMallContext);

const MallContainer = () => {
  const [isOpenDoor, setOpenDoor] = useState<boolean>(true);
  const [theme, setTheme] = useState<Theme>("mallThemeLight");
  const [section, setSection] = useState<Sections>("floors");
  const [floors, setFloors] = useState<IFloor[]>([]);
  const [selectedFloor, setSelectedFloor] = useState<IFloor>({} as IFloor);
  const returnContext = (): IMallContext => {
    return {
      isOpenDoor,
      section,
      floors,
      selectedFloor,
      theme,
      setSelectedFloor,
      setOpenDoor,
      setSection,
      setFloors,
      setTheme,
    };
  };
  return (
    <mallContext.Provider value={returnContext()}>
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(Mall: any) => (
          <Mall
            className={generateClassName([style.mallContainer, style[theme]])}
          />
        )}
      </BaseResponsive>
    </mallContext.Provider>
  );
};

export default MallContainer;
