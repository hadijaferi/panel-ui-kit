import { BaseService, GET, Path, QueryMap } from "ts-retrofit";
import ChatApi from "../Constants/ChatApi";
import { IChatListResponse } from "../Models/Response/IChatListResponse";
import { IChatListRequest } from "../Models/Request/IChatListRequest";
import { IChatListMessageRequest } from "../Models/Request/IChatListMessageRequest";
import { IChatListMessageResponse } from "../Models/Response/IChatListMessageResponse";
import HttpServiceChat from "../../../../infrastructure/HttpClient/HttpServiceChat";
import { IChatResponse } from "../../../../infrastructure/Models/HttpClient/IResponse";
import { IChatUserModel } from "../Models/IChatUserModel";

class ChatService extends BaseService {
  @GET(ChatApi.CHAT_CLIENT_INFO)
  async getUserInfo(): Promise<IChatResponse<IChatUserModel>> {
    return {} as IChatResponse<IChatUserModel>;
  }

  @GET(ChatApi.CHAT_LIST)
  async getChatList(
    @QueryMap _query: IChatListRequest,
  ): Promise<IChatResponse<IChatListResponse>> {
    return {} as IChatResponse<IChatListResponse>;
  }

  @GET(ChatApi.CHAT_MESSAGES)
  async getChatMessageList(
    @QueryMap _query: IChatListMessageRequest,
    @Path("chatId") _chatId: number,
  ): Promise<IChatResponse<IChatListMessageResponse>> {
    return {} as IChatResponse<IChatListMessageResponse>;
  }
}

export default HttpServiceChat.build(ChatService);
