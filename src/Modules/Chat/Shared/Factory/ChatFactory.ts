import { IChatModel } from "../Models/IChatModel";
import { IChatState } from "../Models/Store/IChatState";
import { IChatUserModel } from "../Models/IChatUserModel";
import { IChatUser } from "../Models/Store/IChatUser";
import { IChat } from "../Models/Store/IChat";
import { IMessageModel } from "../Models/IMessageModel";
import { IChatItemState } from "../Models/Store/IChatItemState";

export default class ChatFactory {
  static prepareChatListToState(
    clientId: number,
    chatModels: IChatModel[],
  ): Omit<IChatState, "currentChatId" | "clientInfo"> {
    const chatIds: number[] = [];
    const userIds: number[] = [];
    const chats: Record<number, IChat> = {};
    const users: Record<number, IChatUser> = {};

    chatModels.forEach(chat => {
      chatIds.push(chat.Id);
      chats[chat.Id] = ChatFactory.prepareChat(chat);

      chat.Users.forEach(user => {
        if (user.Id !== clientId && !users[user.Id]) {
          userIds.push(user.Id);
          users[user.Id] = ChatFactory.prepareUserChat(user);
        }
      });
    });

    return {
      upload: {
        byId: {},
        allIds: [],
      },
      chats: {
        byId: chats,
        allIds: chatIds,
      },
      users: {
        allIds: userIds,
        byId: users,
      },
    };
  }

  static prepareUserChat(
    userModel: IChatUserModel,
    isOnline = false,
    isTyping = false,
  ): IChatUser {
    return {
      ...userModel,
      IsOnline: isOnline,
      IsTyping: isTyping,
    };
  }

  static prepareChat(chatModel: IChatModel, isBlocked = false): IChat {
    return {
      ...chatModel,
      Messages: {
        byId: {},
        allIds: [],
      },
      LastMessage: chatModel.Messages[0] || {},
      UnreadMessageCount: chatModel.Messages[0]?.UnreadCount || 0,
      IsBlocked: isBlocked,
    };
  }

  static prepareMessagesListToState(
    messagesModel: IMessageModel[],
  ): IChatItemState<IMessageModel> {
    const messageIds: number[] = [];
    const messages: Record<number, IMessageModel> = {};
    messagesModel.forEach(message => {
      message.UploadFileId = "";
      messages[message.Id] = message;
      messageIds.push(message.Id);
    });
    return {
      byId: messages,
      allIds: messageIds,
    };
  }
}
