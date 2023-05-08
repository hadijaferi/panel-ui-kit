import { useContext } from "react";
import { mallContext } from "../Container";

const useTheme = () => {
  const contextMall = useContext(mallContext);
  const toggleTheme = () => {
    contextMall.setTheme(
      contextMall.theme === "mallThemeLight"
        ? "mallThemeDark"
        : "mallThemeLight",
    );
  };
  return {
    toggleTheme,
  };
};

export default useTheme;
