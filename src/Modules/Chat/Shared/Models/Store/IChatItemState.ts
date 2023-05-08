export interface IChatItemState<
  ENTITY,
  ID_TYPE extends string | number = number
> {
  byId: Record<ID_TYPE, ENTITY>;
  allIds: ID_TYPE[];
}
