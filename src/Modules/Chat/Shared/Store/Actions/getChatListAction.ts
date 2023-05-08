import { Dispatch } from "redux";
import ChatService from "../../Service/ChatService";
import { IChatListRequest } from "../../Models/Request/IChatListRequest";
import { ISetChatListAction } from "../../Models/Store/Actions/ISetChatListAction";
import ChatFactory from "../../Factory/ChatFactory";

const getChatListAction = (
  clientId: number,
  request: IChatListRequest,
) => async (dispatch: Dispatch<ISetChatListAction>) => {
  const chatList = await ChatService.getChatList(request);
  if (chatList) {
    dispatch({
      type: "SET_CHAT_LIST_ACTION",
      payload: ChatFactory.prepareChatListToState(
        clientId,
        chatList.data.Chats,
      ),
    });
  }
};

export default getChatListAction;
