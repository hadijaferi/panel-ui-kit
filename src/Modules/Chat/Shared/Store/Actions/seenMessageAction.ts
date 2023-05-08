import { IMessageSeenModel } from "../../Models/IMessageSeenModel";
import { ISeenMessageAction } from "../../Models/Store/Actions/ISeenMessageAction";

const seenMessageAction = ({
  MessageId,
  ChatId,
}: IMessageSeenModel): ISeenMessageAction => {
  return {
    type: "SEEN_MESSAGE_ACTION",
    payload: {
      ChatId,
      MessageId,
    },
  };
};

export default seenMessageAction;
