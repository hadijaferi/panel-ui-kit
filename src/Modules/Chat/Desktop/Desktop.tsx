import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatBox from "./Components/ChatBox/ChatBox";
import ChatList from "./Components/ChatList/ChatList";
import style from "./Desktop.module.sass";
import getChatListAction from "../Shared/Store/Actions/getChatListAction";
import { useChatSocket } from "../Shared/Helpers/useChatSocket";
import { IRootState } from "../../../Share/Store/Reducer";
import ChatService from "../Shared/Service/ChatService";
import setChatClientInfoAction from "../Shared/Store/Actions/setChatClientInfoAction";
import generateClassName from "../../../Share/Helpers/Dom/generateClassName";
import Icon from "../../../Share/Components/Common/Icon/Icon";

const ChatDesktopContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { runSocket } = useChatSocket();
  const [isOpen, setIsOpen] = useState(false);
  const clientInfo = useSelector((state: IRootState) => state.chat.clientInfo);
  const currentChatRoomId = useSelector(
    (state: IRootState) => state.chat.currentChatId,
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

  return (
    <div className={style.wrapper}>
      <h2 className={style.header}>چت و پشتیبانی</h2>
      <div className={style.ChatContainer}>
        <div className="d-flex flex-sm-wrap">
          <div
            className={generateClassName([
              "col-3 col-xl-4 col-sm-12",
              style.col,
            ])}>
            <ChatList key={currentChatRoomId} />
          </div>
          <div
            className={generateClassName([
              "col-9 col-xl-8 col-sm-12",
              style.col,
            ])}>
            <ChatBox />
          </div>
        </div>
      </div>
      <div
        className={generateClassName([
          style.fixedChat,
          isOpen && style.active,
        ])}>
        <div
          className={generateClassName([
            "d-flex flex-x-between flex-y-center",
            style.button,
          ])}
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          <div className="d-flex flex-y-center fontWeight-500">
            <Icon name="m-chat" size="large" className="m-l-4" />
            چت در مورد این کالا
          </div>
          <Icon name="up" size="medium" className={style.downArrow} />
        </div>
        <div className={style.chatBody}>&nbsp;</div>
      </div>
    </div>
  );
};

export default ChatDesktopContainer;
