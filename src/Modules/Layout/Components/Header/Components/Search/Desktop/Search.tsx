import React, { FC } from "react";

import Button from "../../../../../../../Share/Components/Common/Button/Button";
import Icon from "../../../../../../../Share/Components/Common/Icon/Icon";
import generateClassName from "../../../../../../../Share/Helpers/Dom/generateClassName";
import style from "./Search.module.sass";
import SearchResultBox from "./Result/Result";
import useSearchSite from "../Hooks/useSearchSite";
import { IBaseComponentProps } from "../../../../../../../infrastructure/Models/IBaseComponent";

const SearchSiteDesktop: FC<IBaseComponentProps> = props => {
  const hookSearch = useSearchSite();
  return (
    <div
      ref={hookSearch.searchBoxRef}
      className={generateClassName([style.acSearch, props.className])}>
      <div className={style.searchInput}>
        <input
          type="search"
          value={hookSearch.searchValue}
          onChange={event => {
            hookSearch.onSearchValueChange(event.target.value);
          }}
          name="search"
          onClick={() => {
            hookSearch.toggleSearchResult(true);
          }}
          placeholder="از میان هزاران کالا و خدمات جستجو کنید ..."
        />
        <Button
          color="red"
          size="medium"
          radius="radius16"
          onClick={() => hookSearch.onSubmit()}
          isDisabled={hookSearch.searchValue.length < 3}
          className={style.button}>
          <Icon name="search" size="large" />
        </Button>
      </div>
      <SearchResultBox
        className={generateClassName([
          style.searchResultBox,
          hookSearch.showSearchResult && style.active,
        ])}
        {...hookSearch}
      />
    </div>
  );
};
export default SearchSiteDesktop;
