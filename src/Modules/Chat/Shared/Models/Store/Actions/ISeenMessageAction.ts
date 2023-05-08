import { IMessageSeenModel } from "../../IMessageSeenModel";

export interface ISeenMessageAction {
  type: "SEEN_MESSAGE_ACTION";
  payload: {
    MessageId: IMessageSeenModel["MessageId"];
    ChatId: IMessageSeenModel["ChatId"];
  };
}
