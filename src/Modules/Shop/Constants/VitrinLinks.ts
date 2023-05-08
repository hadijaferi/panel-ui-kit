export const VITRIN_PAGES = {
  VITRIN: "vitrin",
  GALLERY: "gallery",
  ABOUT: "about",
  PRODUCTS: "products",
  SERVICES: "services",
  COMMENTS: "comments",
};
type VitrinPagesKeys = keyof typeof VITRIN_PAGES;
export type IVitrinPageTypes = typeof VITRIN_PAGES[VitrinPagesKeys];
