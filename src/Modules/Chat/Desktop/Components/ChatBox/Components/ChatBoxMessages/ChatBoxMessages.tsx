import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ChatBoxMessages.module.sass";
import buttonClasses from "../../ChatBox.module.sass";
import loadingAnimation from "../../../../../../../Resources/image/AddressClickLoading.svg";
import { IChatState } from "../../../../../Shared/Models/Store/IChatState";
import getChatMessagesAction from "../../../../../Shared/Store/Actions/getChatMessagesAction";
import { IRootState } from "../../../../../../../Share/Store/Reducer";
import ChatBoxMessage from "./Components/ChatBoxMessage/ChatBoxMessage";

interface OwnProps {
  scrollToBottomRef: React.RefObject<HTMLButtonElement>;
  scrollToBottomFunc: (
    listRef: React.RefObject<HTMLUListElement>,
    option?: { smooth: boolean },
  ) => void;
  listRef: React.RefObject<HTMLUListElement>;
  currentChatRoomId: IChatState["currentChatId"];
}

type Props = OwnProps;

const debounceScrollHandler = <T extends unknown>(
  targetEvent: EventTarget & T,
  method: any,
  delay: number,
) => {
  clearTimeout(method.timeoutId);
  method.timeoutId = setTimeout(() => {
    method(targetEvent);
  }, delay);
};

const ChatBoxMessages: FunctionComponent<Props> = ({
  scrollToBottomRef,
  scrollToBottomFunc,
  listRef,
  currentChatRoomId,
}: Props) => {
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const [loading, setLoading] = useState(false);
  const observableRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef(
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        console.log("fetch");
      }
    }),
  );
  const messagesList = useSelector(
    (state: IRootState) => state.chat.chats.byId[currentChatRoomId].Messages,
  );
  const lastMessage = useSelector(
    (state: IRootState) => state.chat.chats.byId[currentChatRoomId].LastMessage,
  );

  const clientId = useSelector((state: IRootState) => state.chat.clientInfo.Id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!messagesList.allIds.length && currentChatRoomId) {
      setLoading(true);
      dispatch(
        getChatMessagesAction(currentChatRoomId, {
          EntityId: 0,
          EntityNumber: 100,
        }),
      );
    }
    if (messagesList.allIds.length) {
      setLoading(false);
    }
  }, [currentChatRoomId, dispatch, messagesList]);

  useEffect(() => {
    if (observableRef.current) {
      observerRef.current.observe(observableRef.current);
    }
  }, [observableRef.current]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottomFunc(listRef);
    }, 10);
    return () => {
      clearTimeout(timer);
    };
  }, [listRef, scrollToBottomFunc, loading, currentChatRoomId]);

  useEffect(() => {
    if (lastMessage) {
      if (lastMessage.From?.Id === clientId || !showScrollToBottom) {
        scrollToBottomFunc(listRef, { smooth: true });
      }
    }
  }, [lastMessage]);

  useEffect(() => {
    if (scrollToBottomRef.current) {
      if (showScrollToBottom) {
        scrollToBottomRef.current.classList.add(buttonClasses.slideInAnimation);
      } else if (
        scrollToBottomRef.current.classList.contains(
          buttonClasses.slideInAnimation,
        )
      ) {
        scrollToBottomRef.current.classList.remove(
          buttonClasses.slideInAnimation,
        );
      }
    }
  }, [scrollToBottomRef, showScrollToBottom]);

  const checkScrollToBottomAppearance = (
    event: EventTarget & HTMLUListElement,
  ) => {
    if (event.scrollHeight - event.offsetHeight - event.scrollTop > 1000) {
      setShowScrollToBottom(true);
    } else {
      setShowScrollToBottom(false);
    }
  };

  const renderMessageList = () => {
    return messagesList.allIds.map(messageId => {
      const message = messagesList.byId[messageId];
      const isOwned = message?.From?.Id === clientId;

      return (
        <ChatBoxMessage
          isOwned={isOwned}
          key={messageId}
          messageId={+messageId}
          image={
            message.Attachment?.length
              ? message.Attachment[0]?.FileThumbnailUrl
              : null
          }
          uploadFileId={message.UploadFileId}
          date={new Date(message.CreatedDate)}
          seen={message.IsSeen}>
          {message.Text}
        </ChatBoxMessage>
      );
    });
  };
  return (
    <ul
      className={classes.chatBoxMessagesWrapper}
      ref={listRef}
      onScroll={event => {
        debounceScrollHandler<HTMLUListElement>(
          event.currentTarget,
          checkScrollToBottomAppearance,
          200,
        );
      }}>
      {!loading ? (
        <>
          <span
            ref={observableRef}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "200px",
            }}
          />
          {renderMessageList()}
        </>
      ) : (
        <div className={classes.loadingAnimation}>
          <img src={loadingAnimation} alt="loading animation" />
        </div>
      )}
    </ul>
  );
};

export default React.memo(ChatBoxMessages);
