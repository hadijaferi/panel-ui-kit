import React, { FC, useState } from "react";
import Page from "../../../src/Share/Components/Mobile/Page/Page";
import Toolbar from "../../../src/Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarSearch from "../../../src/Share/Components/Mobile/Toolbar/Components/ToolbarSearch/ToolbarSearch";
import ToolbarTitle from "../../../src/Share/Components/Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarButton from "../../../src/Share/Components/Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import ToolbarMenu from "../../../src/Share/Components/Mobile/Toolbar/Components/ToolbarMenu/ToolbarMenu";

const CustomContent: FC = () => {
  return (
    <>
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
      test <br />
    </>
  );
};

const CustomBadge: FC = () => {
  return (
    <div
      style={{
        borderRadius: "100%",
        width: "12px",
        height: "12px",
        lineHeight: "12px",
        fontSize: "8px",
        textAlign: "center",
        position: "absolute",
        background: "red",
        color: "#fff",
        left: 0,
        top: 0,
        transform: "translate(50%, 50%)",
      }}>
      10
    </div>
  );
};

const TestMobilePage: FC = _props => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Page
      toolbar={() => (
        <Toolbar>
          <ToolbarTitle
            title="تست تولبار"
            rightMenuButton={
              <ToolbarButton icon="arrow-right" onClick={() => {}} />
            }
          />

          <ToolbarMenu>
            <ToolbarButton
              className="pos-relative"
              icon="cart"
              onClick={() => {}}>
              <CustomBadge />
            </ToolbarButton>

            <ToolbarSearch
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              searchIsOpen={searchIsOpen}
              onSearchToggle={setSearchIsOpen}
            />
          </ToolbarMenu>
        </Toolbar>
      )}>
      <CustomContent />
    </Page>
  );
};

export default TestMobilePage;
