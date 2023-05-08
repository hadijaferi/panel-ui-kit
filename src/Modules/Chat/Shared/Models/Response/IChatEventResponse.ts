import { ActionEventTypes } from "../../Enum/ActionEventTypes";

export interface IChatEventResponse<EVENT_TYPE extends ActionEventTypes> {
  EventTypeId: EVENT_TYPE;
  ChatId: number | string | null;
  ClientId: number;
}
