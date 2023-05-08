import { IChatState } from "../Models/Store/IChatState";

const chatInitialState: IChatState = {
  chats: {
    byId: {},
    allIds: [],
  },
  users: {
    byId: {},
    allIds: [],
  },
  upload: {
    byId: {},
    allIds: [],
  },
  currentChatId: 0,
  clientInfo: {
    Id: null,
  },
};

export default chatInitialState;
