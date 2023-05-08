import React, { useState } from "react";

import TabStyle from "./Tab.module.sass";
import generateClassName from "../../../Helpers/Dom/generateClassName";
import { ITabItem, ITabProps } from "./Models/ITabProps";
import Button from "../Button/Button";

/**
 * Tab
 *
 * to use Tab  Component you have to write < Tab / > (without space) and items property is necessary . it will be :
 * ```
 * <Tab items={teb} />
 * ```
 * simple items option:
 * ```
 let teb : ITabItem[] = [
 {
                id: 1,
                title: "جزییات سفارشات",
                content: "کلی چیز و میز"
            },
 {
                id: 2,
                title: "مشاهده سابقه پرداخت",
                content: " در مورد این تب کلی چیز و میز"
            },
 ]
 * ```
 * ITabItem properties are : <span style="background:#ededed;padding: 5px 7px;">id</span> , <span style="background:#ededed;padding: 5px 7px;">title</span> , <span style="background:#ededed;padding: 5px 7px;">isActive</span> , <span style="background:#ededed;padding: 5px 7px;">content</span>
 * @param <span style="background:#ededed;padding: 5px 7px;">items</span> , <span style="background:#ededed;padding: 5px 7px;">onChangeTab</span>
 * @category Component
 * @version 1.00
 * @author Seyed Mohammad Hoseyni
 * */
const Tab = ({ items, theme, onChangeTab, catchable }: ITabProps) => {
  const [activeId, setActiveId] = useState(
    items.find(item => item.isActive)?.id || items[0]?.id || 0,
  );

  const changeTab = (tabItem: ITabItem | undefined): void => {
    onChangeTab?.(tabItem);
  };

  const changeActiveItem = (id: number): void => {
    setActiveId(id);
    changeTab(items.find(item => item.id === id));
  };

  return (
    <div className={TabStyle.acTab}>
      <nav
        className={generateClassName([TabStyle.acHead, TabStyle[theme || ""]])}>
        {items.map(item => (
          <Button
            href=""
            key={`tab${item.id}`}
            rippleColor="transparent"
            theme="text"
            onClick={() => changeActiveItem(item.id)}
            className={generateClassName([
              TabStyle.acItem,
              " ",
              item.id === activeId && TabStyle.acActive,
            ])}>
            <span className={TabStyle.acText}>{item.title}</span>
          </Button>
        ))}
      </nav>
      <div className="AcContent">
        {items.map(item =>
          catchable ? (
            <div
              className={generateClassName([item.id !== activeId && "d-none"])}
              key={`tab${item.id}`}>
              {typeof item.content === "function"
                ? item.content()
                : item.content}
            </div>
          ) : (
            item.id === activeId && (
              <div key={item.id}>
                {typeof item.content === "function"
                  ? item.content()
                  : item.content}
              </div>
            )
          ),
        )}
      </div>
    </div>
  );
};
export default Tab;
