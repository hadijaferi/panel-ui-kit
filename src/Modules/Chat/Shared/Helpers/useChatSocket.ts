import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { IMessageModel } from "../Models/IMessageModel";
import { SocketEvents } from "../Enum/SocketEvents";
import { IChatSendMessageRequest } from "../Models/Request/IChatSendMessageRequest";
import { IChatIsTypingRequest } from "../Models/Request/IChatIsTypingRequest";
import { IChatSeenMessageRequest } from "../Models/Request/IChatSeenMessageRequest";
// import { IChatEditMessageRequest } from "../Models/Request/IChatEditMessageRequest";
// import { ChatDeleteMessageRequest } from "../Models/Request/IChatDeleteMessageRequest";
// import { IChatReplyMessageRequest } from "../Models/Request/IChatReplyMessageRequest";
// import { ChatUserBlockRequest } from "../Models/Request/IChatUserBlockRequest";
// import { IChatUserUnblockResponse } from "../Models/Response/IChatUserUnblockResponse";
// import { IUserBlockModel } from "../Models/IUserBlockModel";
import { IMessageSeenModel } from "../Models/IMessageSeenModel";
// import { IChatDeleteMessageResponse } from "../Models/Response/IChatDeleteMessageResponse";
import { IChatEventResponse } from "../Models/Response/IChatEventResponse";
import { ActionEventTypes } from "../Enum/ActionEventTypes";
import addChatMessageAction from "../Store/Actions/addChatMessageAction";
import seenMessageAction from "../Store/Actions/seenMessageAction";
import setChatUserTypingAction from "../Store/Actions/setChatUserTypingAction";
// import { IChatInfo } from "../Models/IChatInfo";
// import setChatClientInfoAction from "../Store/Actions/setChatClientInfoAction";
import setChatUserOnlineAction from "../Store/Actions/setChatUserOnlineAction";
import { IRootState } from "../../../../Share/Store/Reducer";
import setChatUserOfflineAction from "../Store/Actions/setChatUserOfflineAction";
import GlobalSocket from "./GlobalSocket";
import uploadChatFileAction from "../Store/Actions/uploadChatFileAction";
import { IChatOnline } from "../Models/IChatOnline";

export const useChatSocket = () => {
  const dispatch = useDispatch();
  const clientId = useSelector((state: IRootState) => state.chat.clientInfo.Id);

  const isInitialize = (): boolean => {
    return !!GlobalSocket;
  };

  const onMessage = () => {
    GlobalSocket?.on(SocketEvents.message, (response: IMessageModel) => {
      dispatch(addChatMessageAction(response));
    });
  };

  const onOnline = () => {
    GlobalSocket?.on(
      SocketEvents.online,
      (response: IChatEventResponse<ActionEventTypes.Online>) => {
        if (clientId && clientId !== response.ClientId) {
          dispatch(setChatUserOnlineAction(response));
        }
      },
    );
  };
  const onOffline = () => {
    GlobalSocket?.on(
      SocketEvents.offline,
      (response: IChatEventResponse<ActionEventTypes.Offline>) => {
        if (clientId && clientId !== response.ClientId) {
          dispatch(setChatUserOfflineAction(response));
        }
      },
    );
  };

  const onSeenMessage = () => {
    GlobalSocket?.on(
      SocketEvents.seenMessage,
      (response: IMessageSeenModel) => {
        dispatch(seenMessageAction(response));
      },
    );
  };
  const onChatOnline = () => {
    GlobalSocket?.on(SocketEvents.chatsOnline, (response: IChatOnline) => {
      response.chats.forEach(chat => {
        if (chat.userIds.length) {
          dispatch(
            setChatUserOnlineAction({
              ClientId: chat.userIds[0],
              ChatId: chat.chatId,
              EventTypeId: ActionEventTypes.Online,
            }),
          );
        }
      });
    });
  };

  // const onEditMessage = () => {
  //   GlobalGlobalSocket?.on(SocketEvents.startTyping, (response: IMessageModel) => {});
  // };
  //
  // const onReplyMessage = () => {
  //   GlobalGlobalSocket?.on(SocketEvents.startTyping, (response: IMessageModel) => {});
  // };
  //
  // const onDeleteMessage = () => {
  //   GlobalGlobalSocket?.on(
  //     SocketEvents.startTyping,
  //     (response: IChatDeleteMessageResponse) => {},
  //   );
  // };
  //
  // const onBlock = () => {
  //   GlobalGlobalSocket?.on(
  //     SocketEvents.startTyping,
  //     (response: IUserBlockModel) => {},
  //   );
  // };
  //
  // const onUnBlock = () => {
  //   GlobalGlobalSocket?.on(
  //     SocketEvents.startTyping,
  //     (response: IChatUserUnblockResponse) => {},
  //   );
  // };

  const onTyping = () => {
    GlobalSocket?.on(
      SocketEvents.startTyping,
      (response: IChatEventResponse<ActionEventTypes.Typing>) => {
        if (clientId !== response.ClientId) {
          dispatch(setChatUserTypingAction(response.ClientId));
        }
      },
    );
  };

  // const onInfo = () => {
  //   GlobalSocket?.on(SocketEvents.info, (response: IChatInfo) => {
  //     dispatch(setChatClientInfoAction(response.UserId));
  //   });
  // };

  const sendMessage = (request: IChatSendMessageRequest) => {
    GlobalSocket?.emit(SocketEvents.sendMessage, request);
  };

  // const editMessage = (request: IChatEditMessageRequest) => {
  //   GlobalGlobalSocket?.emit(SocketEvents.editMessage, request);
  // };
  //
  // const replyMessage = (request: IChatReplyMessageRequest) => {
  //   GlobalGlobalSocket?.emit(SocketEvents.replyMessage, request);
  // };
  //
  // const deleteMessage = (request: ChatDeleteMessageRequest) => {
  //   GlobalGlobalSocket?.emit(SocketEvents.deleteMessage, request);
  // };

  const seenMessage = (request: IChatSeenMessageRequest) => {
    console.log("seen Emited", request.MessageId);
    GlobalSocket?.emit(SocketEvents.seenMessage, request);
  };

  const isTyping = (request: IChatIsTypingRequest) => {
    GlobalSocket?.emit(SocketEvents.startTyping, request);
  };

  // const block = (request: ChatUserBlockRequest) => {
  //   GlobalGlobalSocket?.emit(SocketEvents.block, request);
  // };
  //
  // const unBlock = (request: ChatUserBlockRequest) => {
  //   GlobalGlobalSocket?.emit(SocketEvents.unBlock, request);
  // };

  const uploadFile = (file: File, chatId: number) => {
    const fileId = nanoid(8);
    dispatch(uploadChatFileAction(file, chatId, fileId));
    return fileId;
  };

  const initEvents = () => {
    onMessage();
    onSeenMessage();
    // onInfo();
    onOnline();
    onOffline();
    onChatOnline();
    // onEditMessage();
    // onReplyMessage();
    // onDeleteMessage();
    // onBlock();
    // onUnBlock();
    onTyping();
  };

  const runSocket = () => {
    if (isInitialize()) {
      initEvents();
    }
  };

  return {
    runSocket,
    isInitialize,
    onMessage,
    // onInfo,
    onOnline,
    onOffline,
    onSeenMessage,
    // onEditMessage,
    // onReplyMessage,
    // onDeleteMessage,
    // onBlock,
    // onUnBlock,
    onTyping,
    sendMessage,
    // editMessage,
    // replyMessage,
    // deleteMessage,
    seenMessage,
    isTyping,
    onChatOnline,
    // block,
    // unBlock,
    uploadFile,
    initEvents,
  };
};
