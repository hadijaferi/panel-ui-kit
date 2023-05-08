export default class ChatApi {
  static BASE = "http://192.168.3.129:3001/";

  static CHAT_LIST = `chat/chat-list`;

  static CHAT_MESSAGES = `chat/chat-messages/{chatId}`;

  static CHAT_START = `chat/chat-start`;

  static CHAT_ARCHIVE_COUNT = `chat/chat-archived-count`;

  static CHAT_UPLOAD = `media/upload`;

  static CHAT_CLIENT_INFO = `auth/user-info`;
}
