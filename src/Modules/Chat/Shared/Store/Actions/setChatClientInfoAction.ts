import { ISetChatClientInfoAction } from "../../Models/Store/Actions/ISetChatClientInfoAction";

const setChatClientInfoAction = (userId: number): ISetChatClientInfoAction => ({
  type: "SET_CHAT_CLIENT_INFO_ACTION",
  payload: {
    userId,
  },
});

export default setChatClientInfoAction;
