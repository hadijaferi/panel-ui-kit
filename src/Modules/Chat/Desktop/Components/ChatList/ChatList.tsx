import React, { FC } from "react";
import { useSelector } from "react-redux";
import style from "./ChatList.module.sass";
import ChatRoom from "./Components/ChatRoom/ChatRoom";
import { IRootState } from "../../../../../Share/Store/Reducer";

const ChatList: FC = () => {
  const chatList = useSelector((state: IRootState) => state.chat.chats);
  const currentChatId = useSelector(
    (state: IRootState) => state.chat.currentChatId,
  );
  return (
    <div className={style.chatListWrapper}>
      <div className={style.chatListContacts}>
        {chatList.allIds.map(id => (
          <ChatRoom id={id} key={id} isSelected={currentChatId === id} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
