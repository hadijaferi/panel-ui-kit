import React, { FC, useRef } from "react";
import { useSelector } from "react-redux";
import style from "./ChatBox.module.sass";
import ChatBoxHeader from "./Components/ChatBoxHeader/ChatBoxHeader";
import ChatBoxInput from "./Components/ChatBoxInput/ChatBoxInput";
import ChatBoxMessages from "./Components/ChatBoxMessages/ChatBoxMessages";
import Icon from "../../../../../Share/Components/Common/Icon/Icon";
import { IRootState } from "../../../../../Share/Store/Reducer";
import noChatSelectedImage from "../../../../../Resources/image/noChatSelectedImage.svg";
import Backdrop from "./Components/Backdrop/Backdrop";

const scrollToBottom = (
  listRef: React.RefObject<HTMLUListElement>,
  option?: { smooth: boolean },
) => {
  if (listRef.current) {
    if (option && option.smooth) {
      listRef.current.scrollTo({
        behavior: "smooth",
        top: listRef.current.scrollHeight,
      });
    } else {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }
};

interface IChatBoxProps {
  isMobile?: boolean;
}

const ChatBox: FC<IChatBoxProps> = props => {
  const scrollToBottomRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const currentChatRoomId = useSelector(
    (state: IRootState) => state.chat.currentChatId,
  );
  // const currentUserId = useSelector((state: IRootState ) => state.chat.chats.byId[currentChatRoomId].)

  return (
    <div className={style.chatBoxWrapper}>
      {currentChatRoomId ? (
        <>
          <ChatBoxHeader currentChatRoomId={currentChatRoomId} />
          <div className={style.chatParent}>
            <ChatBoxMessages
              scrollToBottomRef={scrollToBottomRef}
              listRef={listRef}
              scrollToBottomFunc={scrollToBottom}
              currentChatRoomId={currentChatRoomId}
            />
            <button
              ref={scrollToBottomRef}
              className={style.scrollToBottom}
              onClick={() => scrollToBottom(listRef, { smooth: true })}>
              <Icon name="chevron-down" size="largest" />
            </button>
          </div>
          {
            !props?.isMobile && <ChatBoxInput currentChatRoomId={currentChatRoomId} />

          }
          <Backdrop currentChatRoomId={currentChatRoomId} />
        </>
      ) : (
        <div className="d-flex flex-over-center flex-column h100">
          <img src={noChatSelectedImage} className={style.noChatSelected} />
          <p className="colorGray-5e5e5e">
            لطفا برای شروع چت یکی از گفت و گو های خود را انتخاب کنید
          </p>
        </div>
      )}
    </div>
  );
};
export default ChatBox;
