import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import getChatListAction from "../Shared/Store/Actions/getChatListAction";
import { useChatSocket } from "../Shared/Helpers/useChatSocket";
import { IRootState } from "../../../Share/Store/Reducer";
import ChatService from "../Shared/Service/ChatService";
import setChatClientInfoAction from "../Shared/Store/Actions/setChatClientInfoAction";
import ChatList from "../Desktop/Components/ChatList/ChatList";
import Page from "../../../Share/Components/Mobile/Page/Page";
import BottomNavigation from "../../../Share/Components/Mobile/BottomNavigation/BottomNavigation";
import TabBar from "../../../Share/Components/Mobile/TabBar/TabBar";
import { IAppBarTab } from "../../../Share/Components/Mobile/TabBar/ITabBarProps";
import ToolbarTitle from "../../../Share/Components/Mobile/Toolbar/Components/ToolbarTitle/ToolbarTitle";
import ToolbarButton from "../../../Share/Components/Mobile/Toolbar/Components/ToolbarButton/ToolbarButton";
import Toolbar from "../../../Share/Components/Mobile/Toolbar/Toolbar";
import { LINKS } from "../../../Share/Constants/LINKS";
import OverPage from "../../../Share/Components/Mobile/OverPage/OverPage";
import setCurrentChatAction from "../Shared/Store/Actions/setCurrentChatAction";
import ChatBox from "../Desktop/Components/ChatBox/ChatBox";
import ChatBoxInput from "../Desktop/Components/ChatBox/Components/ChatBoxInput/ChatBoxInput";
import generateClassName from "../../../Share/Helpers/Dom/generateClassName";
import style from "./ChatMobileContainer.module.sass";

const ChatMobileContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { runSocket } = useChatSocket();
  const clientInfo = useSelector((state: IRootState) => state.chat.clientInfo);
  const currentChatRoomId = useSelector(
    (state: IRootState) => state.chat.currentChatId
  );

  useEffect(() => {
    if (clientInfo.Id) {
      runSocket();
      dispatch(getChatListAction(clientInfo.Id, { IsArchive: false }));
    }
  }, [clientInfo.Id]);

  useEffect(() => {
    ChatService.getUserInfo().then(response => {
      dispatch(setChatClientInfoAction(response.data.Id));
    });
  }, []);

  const appBarItems: IAppBarTab[] = [
    {
      id: 0,
      title: "خانه",
      icon: "m-home"
    },
    {
      id: 1,
      title: "دسته بندی",
      icon: "category",
      activeIcon: "save"
    },
    {
      id: 2,
      title: "سبدخرید",
      icon: "cart"
    },
    {
      id: 3,
      title: "گفتگو",
      icon: "chat"
    }
  ];

  const onAppBarClick = (activeId: number) => {
    switch (activeId) {
      case 0:
        router.push(LINKS.HOME);
        break;
      case 1:
        router.push(LINKS.SEARCH);
        break;
      case 2:
        router.push(LINKS.CART);
        break;

      default:
    }
  };

  const closeChatOverPage = () => {
    dispatch(setCurrentChatAction(0));
  };

  return (
    <Page
      toolbar={() => (
        <Toolbar>
          <ToolbarTitle
            title="گفتگو ها"
            rightMenuButton={
              <ToolbarButton icon="angle-right" onClick={() => {
                if (currentChatRoomId > 0) {
                  closeChatOverPage();
                }
              }
              } />
            }
          />
        </Toolbar>
      )}
      bottomNavigation={() => (
        <BottomNavigation>

          <div className={style.bottomNavigation}>

            <ChatBoxInput currentChatRoomId={currentChatRoomId} className={generateClassName([
              style.chatBoxInput,
              currentChatRoomId === 0 && style.chatBoxInputHide
            ])} />

            <div className={generateClassName([
              style.bottomNavigationItem,
              currentChatRoomId === 0 && style.show
            ])}>
              <TabBar
                activeId={3}
                tabs={appBarItems}
                onTabBarChange={onAppBarClick}
              />
            </div>
          </div>
        </BottomNavigation>
      )}>
      <ChatList key={currentChatRoomId} />
      <OverPage
        isOpen={currentChatRoomId > 0}
        onToggle={isOpen => {
          if (!isOpen) {
            closeChatOverPage();
          }
        }}>
        <Page>
          <ChatBox isMobile />
        </Page>
      </OverPage>
    </Page>
  );
};

export default ChatMobileContainer;
