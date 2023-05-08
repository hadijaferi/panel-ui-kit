import React, { FC, useEffect } from "react";
import { GenerateVitrinPageItems } from "../../Helpers/generateVitrinPageItems";
import About from "../../Components/About/Desktop";
import { IShopPageProps } from "../../Models/IShopPageProps";
import usePersistContent from "../../Helpers/persistContent";
import { IVitrinPageTypes, VITRIN_PAGES } from "../../Constants/VitrinLinks";
import Header from "./Components/Header/Header/Header";
import SearchContainer from "../../Components/SearchModule/SearchModule";
import GalleryCard from "../../Service/Components/GalleryCard/GalleryCard";

interface IGeneratePageProps {
  pageType: IVitrinPageTypes;
}

const GeneratePage: FC<IGeneratePageProps> = props => {
  switch (props.pageType) {
    case VITRIN_PAGES.PRODUCTS:
      return <SearchContainer />;
    case VITRIN_PAGES.GALLERY:
      return <GalleryCard Title="" GalleryItems={[]} />;
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
