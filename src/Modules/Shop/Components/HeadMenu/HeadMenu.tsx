import React, { FC, useRef } from "react";
import { useRouter } from "next/router";
import style from "./HeadMenu.module.sass";
import generateClassName from "../../../../Share/Helpers/Dom/generateClassName";
import { IVitrinPageTypes } from "../../Constants/VitrinLinks";
import { LINKS } from "../../../../Share/Constants/LINKS";
import useGetShop from "../../Hooks/useGetShop";

export interface IMenuItem {
  title: string;
  pageName: IVitrinPageTypes;
}

interface IHeadMenuProps {
  menuItems: IMenuItem[];
}

const HeadMenu: FC<IHeadMenuProps> = props => {
  const router = useRouter();
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const useShop = useGetShop();
  const currentPage = useShop.pageName;
  return (
    <div ref={menuContainerRef} className={style.menu}>
      <ul>
        {props.menuItems.map(menuItem => {
          return (
            <li
              key={`item_${menuItem.pageName}`}
              onClick={async () => {
                await router.push(
                  {
                    href: LINKS.VITRIN,
                    query: {
                      username: router.query.username,
                      q: menuItem.pageName,
                    },
                  },
                  undefined,
                  {
                    scroll: false,
                  },
                );
              }}
              className={generateClassName([
                currentPage === menuItem.pageName && style.active,
              ])}>
              <span>{menuItem.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HeadMenu;
