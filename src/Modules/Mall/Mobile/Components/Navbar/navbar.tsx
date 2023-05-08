import React, { useState } from "react";
import { useRouter } from "next/router";
import useTheme from "../../../Hooks/useTheme";
import style from "./navbar.module.sass";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import generateClassName from "../../../../../Share/Helpers/Dom/generateClassName";

const NavBar = () => {
  const [isLight, setIsLight] = useState(true);
  const theme = useTheme();
  const router = useRouter();
  return (
    <nav className={style.navbar}>
      <div
        onClick={() => {
          router.back();
        }}>
        <Icon name="chevron-right" size="largest" />
        <span className="m-r-16">پاساژگردی</span>
      </div>
      <div
        onClick={() => {
          setIsLight(!isLight);
          theme.toggleTheme();
        }}
        className={generateClassName([
          style.white,
          style.iconButton,
          style.themeButton,
        ])}>
        {isLight ? (
          <Icon name="moon" size="largest" className={style.ThemeIcon} />
        ) : (
          <Icon name="sun" size="largest" className={style.ThemeIcon} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
