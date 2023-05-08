import { NextPageContext } from "next";
import { AppInitialProps } from "next/app";
import { ThunkDispatch } from "redux-thunk";
import { Store } from "redux";

interface AppStore extends Store {
  dispatch: ThunkDispatch<any, any, any>;
}

export interface AppWithStore extends AppInitialProps {
  store: AppStore;
  err?: Error;
}

export interface ReduxNextPageContext extends NextPageContext {
  store: AppStore;
}
