import { ISetChatUserOnlineAction } from "../../Models/Store/Actions/ISetChatUserOnlineAction";
import { IChatEventResponse } from "../../Models/Response/IChatEventResponse";
import { ActionEventTypes } from "../../Enum/ActionEventTypes";

const setChatUserOnlineAction = (
  response: IChatEventResponse<ActionEventTypes.Online>,
): ISetChatUserOnlineAction => {
  return {
    type: "SET_CHAT_USER_ONLINE_ACTION",
    payload: {
      userId: response.ClientId,
    },
  };
};

export default setChatUserOnlineAction;
