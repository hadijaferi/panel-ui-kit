import { BaseService, Body, GET, Path, POST, QueryMap } from "ts-retrofit";
import IResponse from "../../infrastructure/Models/HttpClient/IResponse";
import HttpService from "../../infrastructure/HttpClient/HttpService";
import {
  IChatRoomList,
  IChatRoomMessagesResponse,
} from "../Models/Chat/IChatRoomMessagesResponse";
import { PROFILE_PAGE_API } from "../../Modules/Chat/Constants/ProfilePageApi";

export interface IChatRoomInitialSearchQuery {
  page?: number;
  current?: string | number;
}
class ChatService extends BaseService {
  @GET(PROFILE_PAGE_API.GET_CHATROOM_INITIAL)
  async getChatRoomInitialMessages(
    @Path("id") _id: number,
    @QueryMap _query: IChatRoomInitialSearchQuery | null,
  ): Promise<IResponse<IChatRoomMessagesResponse>> {
    return {} as IResponse<IChatRoomMessagesResponse>;
  }

  @GET(PROFILE_PAGE_API.GET_CHATROOM_LIST)
  async getChatRoomList(): Promise<IResponse<IChatRoomList>> {
    return {} as IResponse<IChatRoomList>;
  }

  @POST(PROFILE_PAGE_API.GET_CHATROOM_LIST)
  async retrievePvChatRoom(@Body _userId: number): Promise<IResponse<any>> {
    return {} as IResponse<any>;
  }
}

export default HttpService.build(ChatService);
