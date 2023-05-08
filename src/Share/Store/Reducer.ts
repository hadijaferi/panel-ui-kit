import { combineReducers } from "redux";
import { CartReducer } from "./Cart/reducer";
import { ProductReducer } from "./Product/reducer";
import { UserInfoReducer } from "./UserInfo/reducer";
import { ProductActionTypes } from "./Product/types";
import { ICartActions } from "./Cart/types";
import { ChatReducer } from "../../Modules/Chat/Shared/Store/chatReducer";
import { IChatActionTypes } from "../../Modules/Chat/Shared/Models/Store/IChatActionTypes";

export const allReducers = combineReducers({
  cart: CartReducer,
  product: ProductReducer,
  userInfo: UserInfoReducer,
  chat: ChatReducer,
});
export type IAlLReducerState = ReturnType<typeof allReducers>;

export type IActionTypes = ProductActionTypes | ICartActions | IChatActionTypes;
export type IRootState = ReturnType<typeof allReducers>;
