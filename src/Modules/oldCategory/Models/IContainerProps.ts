import { WithRouterProps } from "next/dist/client/with-router";
import { ISearchResponse } from "../../../Share/Models/Search/ISearchResponse";
import { ISearchRequest } from "../../../Share/Models/Search/ISearchRequest";

export interface ISearchContainerProps extends WithRouterProps {
  SearchResponse: ISearchResponse;
  queryParameters: ISearchRequest;
}
