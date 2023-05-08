import produce from "immer";
import chatInitialState from "./chatInitialState";
import { IChatState } from "../Models/Store/IChatState";
import { IChatActionTypes } from "../Models/Store/IChatActionTypes";
import { MessageEventTypes } from "../Enum/MessageEventTypes";

export const ChatReducer = produce(
  (draft: IChatState, action: IChatActionTypes) => {
    switch (action.type) {
      case "SET_CHAT_LIST_ACTION":
        draft.chats = action.payload.chats;
        draft.users = action.payload.users;
        break;

      case "SET_CURRENT_CHAT_ACTION":
        draft.currentChatId = action.payload.chatId;
        break;

      case "SET_CHAT_USER_ONLINE_ACTION":
        if (action.payload.userId in draft.users.byId) {
          console.log(1561654648496484984, draft.users.byId);
          draft.users.byId[action.payload.userId].IsOnline = true;
        }
        break;

      case "SET_CHAT_USER_OFFLINE_ACTION":
        draft.users.byId[action.payload.userId].IsOnline = false;
        break;

      case "SET_CHAT_USER_IS_TYPING_ACTION":
        draft.users.byId[action.payload.userId].IsTyping = true;
        break;

      case "SET_CHAT_USER_STOP_TYPING_ACTION":
        draft.users.byId[action.payload.userId].IsTyping = false;
        break;

      case "SET_CHAT_BLOCK_ACTION":
        draft.chats.byId[action.payload.chatId].IsBlocked = true;
        break;

      case "SET_CHAT_UNBLOCK_ACTION":
        draft.chats.byId[action.payload.chatId].IsBlocked = false;
        break;

      case "SET_CHAT_MESSAGE_LIST_ACTION":
        draft.chats.byId[action.payload.chatId].Messages =
          action.payload.messages;
        break;

      case "ADD_CHAT_MESSAGE_ACTION":
        if (
          draft.chats.byId[action.payload.message.ChatId] &&
          !(
            action.payload.message.Id in
            draft.chats.byId[action.payload.message.ChatId].Messages.byId
          )
        ) {
          draft.chats.byId[action.payload.message.ChatId].LastMessage =
            action.payload.message;
          draft.chats.allIds.unshift(
            ...draft.chats.allIds.splice(
              draft.chats.allIds.indexOf(action.payload.message.ChatId),
              1,
            ),
          );
          if (
            draft.chats.byId[action.payload.message.ChatId].Messages.allIds
              .length
          ) {
            draft.chats.byId[
              action.payload.message.ChatId
            ].Messages.allIds.push(action.payload.message.Id);
            draft.chats.byId[action.payload.message.ChatId].Messages.byId[
              action.payload.message.Id
            ] = action.payload.message;
          }
        }
        break;

      case "SEEN_MESSAGE_ACTION":
        if (
          action.payload.MessageId in
          draft.chats.byId[action.payload.ChatId].Messages.byId
        ) {
          draft.chats.byId[action.payload.ChatId].Messages.byId[
            action.payload.MessageId
          ].IsSeen = true;
        }
        break;

      case "SET_CHAT_CLIENT_INFO_ACTION":
        draft.clientInfo.Id = action.payload.userId;
        break;

      case "SET_CHAT_UPLOAD_START":
        draft.upload.byId[action.payload.fileId] = {
          ...action.payload,
          error: "",
          progress: 0,
          thumbnail: "",
          mediaId: 0,
          confirmed: false,
        };

        draft.upload.allIds.push(action.payload.fileId);

        break;

      case "SET_CHAT_UPLOAD_SUCCESS":
        draft.upload.byId[action.payload.fileId].progress = 100;
        draft.upload.byId[action.payload.fileId].mediaId =
          action.payload.mediaId;

        break;

      case "SET_CHAT_UPLOAD_FAILED":
        draft.upload.byId[action.payload.fileId].error = action.payload.error;

        break;

      case "SET_CHAT_UPLOAD_PROGRESS":
        draft.upload.byId[action.payload.fileId].progress =
          action.payload.progress;
        break;

      case "SET_CHAT_UPLOAD_CONFIRM":
        draft.upload.byId[action.payload.fileId].confirmed = true;

        // add temp message
        draft.chats.byId[
          draft.upload.byId[action.payload.fileId].chatId
        ].Messages.byId[action.payload.fileId] = {
          Attachment: [],
          Chat: null,
          ChatId: draft.upload.byId[action.payload.fileId].chatId,
          CreatedDate: new Date(),
          EventType: MessageEventTypes.Message,
          ForwardFromMessage: null,
          From: {
            Id: Number(draft.clientInfo.Id),
            FirstName: "",
            LastName: "",
            IsBot: false,
            LastSeenDate: new Date(),
            Mobile: null,
            ProfileImage: null,
            UserName: "",
          },
          Id: 0,
          IsDeleted: false,
          IsEdited: false,
          IsSeen: false,
          ReplyToMessage: null,
          Text: "",
          UnreadCount: 0,
          UpdatedDate: new Date(),
          UploadFileId: action.payload.fileId,
        };
        draft.chats.byId[
          draft.upload.byId[action.payload.fileId].chatId
        ].Messages.allIds.push(action.payload.fileId);

        break;

      case "SET_CHAT_UPLOAD_REJECT":
        delete draft.upload.byId[action.payload.fileId];
        draft.upload.allIds = draft.upload.allIds.filter(
          item => item !== action.payload.fileId,
        );

        break;

      case "SET_CHAT_THUMBNAIL_CONFIRM":
        draft.upload.byId[action.payload.fileId].thumbnail =
          action.payload.thumbnail;
        break;

      case "SET_CHAT_UPLOAD_CANCEL":
        delete draft.chats.byId[draft.upload.byId[action.payload.fileId].chatId]
          .Messages.byId[action.payload.fileId];

        draft.chats.byId[
          draft.upload.byId[action.payload.fileId].chatId
        ].Messages.allIds = draft.chats.byId[
          draft.upload.byId[action.payload.fileId].chatId
        ].Messages.allIds.filter(item => item !== action.payload.fileId);

        delete draft.upload.byId[action.payload.fileId];
        draft.upload.allIds = draft.upload.allIds.filter(
          item => item !== action.payload.fileId,
        );

        break;

      case "DELETE_CHAT_MESSAGE_ACTION":
        delete draft.chats.byId[action.payload.chatId].Messages.byId[
          action.payload.messageId
        ];

        draft.chats.byId[
          action.payload.chatId
        ].Messages.allIds = draft.chats.byId[
          action.payload.chatId
        ].Messages.allIds.filter(item => item !== action.payload.messageId);

        break;

      default:
        break;
    }
  },
  chatInitialState,
);
