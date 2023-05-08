import React, { FC, useState } from "react";
import Page from "../../../src/Share/Components/Mobile/Page/Page";
import Toolbar from "../../../src/Share/Components/Mobile/Toolbar/Toolbar";
import ToolbarHome from "../../../src/Share/Components/Mobile/Toolbar/Components/ToolbarHome/ToolbarHome";
import NavigationDrawer from "../../../src/Share/Components/Mobile/NavigationDrawer/NavigationDrawer";
import BottomNavigation from "../../../src/Share/Components/Mobile/BottomNavigation/BottomNavigation";
import BottomSheet from "../../../src/Share/Components/Mobile/BottomSheet/BottomSheet";
import Button from "../../../src/Share/Components/Common/Button/Button";
import WrapperMobile from "../../../src/Share/Components/Mobile/WrapperMobile/WrapperMobile";
import OverPage from "../../../src/Share/Components/Mobile/OverPage/OverPage";
import TabBar from "../../../src/Share/Components/Mobile/TabBar/TabBar";
import { IAppBarTab } from "../../../src/Share/Components/Mobile/TabBar/ITabBarProps";

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

const TestMobilePage: FC = _props => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [navigationDrawerIsOpen, setNavigationDrawerIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [bottomSheet2Open, setBottomSheet2Open] = useState(false);
  const [overPageOpen, setOverPageOpen] = useState(false);
  const [overPageOpen2, setOverPageOpen2] = useState(false);
  const [appbarActiveId, setAppbarActiveId] = useState(0);
  const appBarItems: IAppBarTab[] = [
    {
      id: 0,
      title: "خانه",
      icon: "m-home",
    },
    {
      id: 1,
      title: "دسته بندی",
      icon: "category",
      activeIcon: "save",
    },
    {
      id: 2,
      title: "سبدخرید",
      icon: "cart",
    },
    {
      id: 3,
      title: "گفتگو",
      icon: "chat",
    },
  ];

  return (
    <Page
      toolbar={() => (
        <Toolbar>
          <ToolbarHome
            onNavigationClick={() => setNavigationDrawerIsOpen(true)}
            searchIsOpen={searchIsOpen}
            setSearchIsOpen={setSearchIsOpen}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
          />
        </Toolbar>
      )}
      navigationDrawer={() => (
        <NavigationDrawer
          isOpen={navigationDrawerIsOpen}
          onDrawerToggle={setNavigationDrawerIsOpen}>
          content
        </NavigationDrawer>
      )}
      bottomNavigation={() => (
        <BottomNavigation>
          <TabBar
            activeId={appbarActiveId}
            tabs={appBarItems}
            onTabBarChange={setAppbarActiveId}
          />
        </BottomNavigation>
      )}
      bottomSheet={() => (
        <>
          <BottomSheet isOpen={bottomSheetOpen} onToggle={setBottomSheetOpen}>
            <div className="p-16">تست</div>
          </BottomSheet>

          <BottomSheet
            fixed
            isOpen={bottomSheet2Open}
            onToggle={setBottomSheet2Open}>
            <div className="p-16">تست</div>
          </BottomSheet>
        </>
      )}>
      <WrapperMobile>
        <Button
          className="w100"
          size="medium"
          theme="bordered"
          color="green"
          onClick={() => setBottomSheetOpen(true)}>
          <div>نمایش باتم شبت در محدوده اپ</div>
        </Button>

        <br />

        <Button
          className="w100"
          size="medium"
          theme="bordered"
          color="red"
          onClick={() => setBottomSheet2Open(true)}>
          <div>نمایش باتم شبت بر روی اپ</div>
        </Button>

        <br />

        <Button
          className="w100"
          size="medium"
          theme="bordered"
          color="blue"
          onClick={() => setOverPageOpen(true)}>
          <div>نمایش اورپیج</div>
        </Button>

        <br />

        <Button
          className="w100"
          size="medium"
          theme="bordered"
          color="yellow"
          onClick={() => setOverPageOpen2(true)}>
          <div>نمایش اورپیج تمام صفحه</div>
        </Button>

        <br />

        <CustomContent />
      </WrapperMobile>

      <OverPage isOpen={overPageOpen} onToggle={setOverPageOpen}>
        <WrapperMobile>
          تست اورپیج
          <Button
            className="w100"
            size="medium"
            theme="bordered"
            color="blue"
            onClick={() => setOverPageOpen(false)}>
            <div>بستن اورپیج</div>
          </Button>
        </WrapperMobile>
      </OverPage>

      <OverPage fixed isOpen={overPageOpen2} onToggle={setOverPageOpen2}>
        <WrapperMobile>
          تست اورپیج تمام صفحه
          <Button
            className="w100"
            size="medium"
            theme="bordered"
            color="yellow"
            onClick={() => setOverPageOpen2(false)}>
            <div>بستن اورپیج تمام صفحه</div>
          </Button>
        </WrapperMobile>
      </OverPage>
    </Page>
  );
};

export default TestMobilePage;
