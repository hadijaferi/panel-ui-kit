import React, { FC, useEffect, useState } from "react";
import { IGeneratePageProps } from "../../Models/IGeneratePageProps";
import { VITRIN_PAGES } from "../../Constants/VitrinLinks";
import { GenerateVitrinPageItems } from "../../Helpers/generateVitrinPageItems";
import { IShopPageProps } from "../../Models/IShopPageProps";
import usePersistContent from "../../Helpers/persistContent";
import Header from "./Components/Header/Header";
import BottomSheet from "../../../../Share/Components/Mobile/BottomSheet/BottomSheet";
import Page from "../../../../Share/Components/Mobile/Page/Page";
import Toolbar from "../../../../Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarTitle from "../../../../Share/Components/Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import { ToolbarBack } from "../../../../Share/Components/Mobile/Toolbar/Components/ToolbarBack/ToolbarBack";
import Button from "../../../../Share/Components/Common/Button/Button";
import Icon from "../../../../Share/Components/Common/Icon/Icon";
import About from "../../Components/About/Desktop";

const GeneratePage: FC<IGeneratePageProps> = props => {
  switch (props.pageType) {
    case VITRIN_PAGES.SERVICES:
      return <div>service page!</div>;
    case VITRIN_PAGES.ABOUT:
      return <About />;
    default:
    case VITRIN_PAGES.VITRIN:
      return <>{GenerateVitrinPageItems()}</>;
  }
};
export default function Mobile(props: IShopPageProps) {
  const pagePersist = usePersistContent({
    currentName: props.pageName,
  });
  const [moreSheetIsOpen, toggleMoreSheet] = useState(false);

  useEffect(() => {
    pagePersist.loader({
      content: <GeneratePage pageType={props.pageName} />,
      name: props.pageName,
    });
  }, [pagePersist, props.pageName]);

  return (
    <>
      <BottomSheet isOpen={moreSheetIsOpen} onToggle={toggleMoreSheet}>
        more...
      </BottomSheet>
      <Page
        toolbar={() => {
          return (
            <Toolbar>
              <ToolbarTitle title="" />
              <div className="d-flex w100 flex-x-between">
                <div>
                  <ToolbarBack>
                    <Button theme="iconic">
                      <Icon name="arrow-right" size="large" />
                    </Button>
                  </ToolbarBack>
                </div>
                <div>
                  <Button
                    onClick={() => toggleMoreSheet(!moreSheetIsOpen)}
                    theme="iconic">
                    <Icon name="menu" />
                  </Button>
                </div>
              </div>
            </Toolbar>
          );
        }}>
        <Header />
        <div className="container m-t-32">{pagePersist.render()}</div>
      </Page>
    </>
  );
}
