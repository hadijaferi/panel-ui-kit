import useGetShop from "./useGetShop";
import { IMenuItem } from "../Components/HeadMenu/HeadMenu";
import { VITRIN_PAGES } from "../Constants/VitrinLinks";

const useMenuItems = () => {
  const shopCtx = useGetShop();
  let items: IMenuItem[] = [];
  if (shopCtx.vitrinType === "service") {
    items = [
      {
        title: "ویترین",
        pageName: VITRIN_PAGES.VITRIN,
      },
      {
        title: "خدمات",
        pageName: VITRIN_PAGES.SERVICES,
      },
      {
        title: `نظرات (${shopCtx.vitrinBase?.CommentCount})`,
        pageName: VITRIN_PAGES.COMMENTS,
      },
      {
        title: "گالری",
        pageName: VITRIN_PAGES.GALLERY,
      },
      {
        title: "درباره ما",
        pageName: VITRIN_PAGES.ABOUT,
      },
    ];
  } else {
    items = [
      {
        title: "ویترین",
        pageName: VITRIN_PAGES.VITRIN,
      },
      {
        title: "محصولات",
        pageName: VITRIN_PAGES.PRODUCTS,
      },
      /*      {
        title: "ووچر و کوپن ها",
        pageName: VITRIN_PAGES.GALLERY,
      }, */
      {
        title: `نظرات (${shopCtx.vitrinBase?.CommentCount})`,
        pageName: VITRIN_PAGES.COMMENTS,
      },
      {
        title: "درباره ما",
        pageName: VITRIN_PAGES.ABOUT,
      },
    ];
  }

  return {
    items,
  };
};
export default useMenuItems;
