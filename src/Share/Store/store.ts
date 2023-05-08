import { AnyAction, applyMiddleware, createStore } from "redux";
import thunkMiddleware, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { allReducers, IRootState } from "./Reducer";
import { ICartActions } from "./Cart/types";
import { ProductActionTypes } from "./Product/types";

const mainReducer = (state: IRootState | undefined, action: any) => {
  if (action.type === HYDRATE) {
    const newState = { ...state, ...action.payload } as IRootState;

    if (state?.cart) {
      newState.cart = state?.cart;
    }
    if (state?.userInfo) {
      newState.userInfo = state?.userInfo;
    }
    return newState;
  }
  return allReducers(state, action);
};
export const store = createStore(
  mainReducer,
  {},
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware as ThunkMiddleware<IRootState, IRootActions>,
    ),
  ),
);
export const makeStore = () => store;
export type IRootActions = ICartActions | ProductActionTypes | AnyAction;

export const wrapper = createWrapper(makeStore);
