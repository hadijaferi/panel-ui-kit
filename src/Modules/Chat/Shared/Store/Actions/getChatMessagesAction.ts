import { Dispatch } from "redux";
import ChatService from "../../Service/ChatService";
import { IChatListMessageRequest } from "../../Models/Request/IChatListMessageRequest";
import { ISetChatMessageListAction } from "../../Models/Store/Actions/ISetChatMessageListAction";
import ChatFactory from "../../Factory/ChatFactory";

const getChatMessagesAction = (
  chatId: number,
  request: IChatListMessageRequest = {},
) => async (dispatch: Dispatch<ISetChatMessageListAction>) => {
  const messageList = (await ChatService.getChatMessageList(request, chatId))
    ?.data;
  if (messageList) {
    dispatch({
      type: "SET_CHAT_MESSAGE_LIST_ACTION",
      payload: {
        chatId: messageList.ChatId,
        messages: ChatFactory.prepareMessagesListToState(messageList.Messages),
      },
    });
  }
};

export default getChatMessagesAction;
