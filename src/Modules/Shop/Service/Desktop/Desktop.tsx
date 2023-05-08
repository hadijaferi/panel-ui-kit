import React, { FC, useEffect } from "react";
import { IShopPageProps } from "../../Models/IShopPageProps";
import Header from "./Components/Header/Desktop";
import { GenerateVitrinPageItems } from "../../Helpers/generateVitrinPageItems";
import { IVitrinPageTypes, VITRIN_PAGES } from "../../Constants/VitrinLinks";
import usePersistContent from "../../Helpers/persistContent";
import About from "../../Components/About/Desktop";
import SearchContainer from "../../Components/SearchModule/SearchModule";
import GalleryPage from "../Components/Pages/GalleryPage/GalleryPage";

interface IGeneratePageProps {
  pageType: IVitrinPageTypes;
}

const GeneratePage: FC<IGeneratePageProps> = props => {
  switch (props.pageType) {
    case VITRIN_PAGES.SERVICES:
      return <SearchContainer />;
    case VITRIN_PAGES.GALLERY:
      return <GalleryPage />;
    case VITRIN_PAGES.ABOUT:
      return <About />;
    default:
    case VITRIN_PAGES.VITRIN:
      return <>{GenerateVitrinPageItems()}</>;
  }
};
export default function Desktop(props: IShopPageProps) {
  const pagePersist = usePersistContent({
    currentName: props.pageName,
    // excepts: ["vitrin"],
  });

  useEffect(() => {
    pagePersist.loader({
      content: <GeneratePage pageType={props.pageName} />,
      name: props.pageName,
    });
  }, [pagePersist, props.pageName]);

  return (
    <div>
      <Header />
      <div className="container m-t-32" style={{ minHeight: "50vh" }}>
        {pagePersist.render()}
      </div>
    </div>
  );
}
