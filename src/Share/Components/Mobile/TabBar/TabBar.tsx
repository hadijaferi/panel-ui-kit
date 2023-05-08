import React, { FC } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { ITabBarProps } from "./ITabBarProps";
import style from "./TabBar.module.sass";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import Icon from "../../Common/Icon/Icon";

const TabBar: FC<ITabBarProps> = props => {
  const { onTabBarChange, theme } = props;
  return (
    <div className={generateClassName([style.appBar, props.className])}>
      <AnimateSharedLayout>
        {props.tabs.map(item => {
          const isActive = item.id === props.activeId;
          return (
            <div
              key={item.id}
              onClick={() => onTabBarChange(item.id)}
              className={generateClassName([
                style.tab,
                props.className,
                isActive && style.active,
                `acTab${item.id}`,
              ])}>
              {item.icon && (
                <Icon
                  className={style.icon}
                  name={isActive ? item.activeIcon || item.icon : item.icon}
                  size="large"
                />
              )}

              {item.title && <div className={style.title}>{item.title}</div>}
              {!!theme && theme !== "default" && isActive && (
                <motion.span
                  layoutId="TabBar_underline"
                  className={generateClassName([
                    style.activeTab,
                    style[`activeTab__${theme}`],
                  ])}
                  initial={false}
                  animate
                />
              )}
            </div>
          );
        })}
      </AnimateSharedLayout>
    </div>
  );
};

export default TabBar;
