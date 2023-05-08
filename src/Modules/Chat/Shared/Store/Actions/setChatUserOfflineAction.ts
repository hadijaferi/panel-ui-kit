import { ISetChatUserOfflineAction } from "../../Models/Store/Actions/ISetChatUserOfflineAction";
import { IChatEventResponse } from "../../Models/Response/IChatEventResponse";
import { ActionEventTypes } from "../../Enum/ActionEventTypes";

const setChatUserOfflineAction = (
  response: IChatEventResponse<ActionEventTypes.Offline>,
): ISetChatUserOfflineAction => {
  return {
    type: "SET_CHAT_USER_OFFLINE_ACTION",
    payload: {
      userId: response.ClientId,
    },
  };
};

export default setChatUserOfflineAction;
