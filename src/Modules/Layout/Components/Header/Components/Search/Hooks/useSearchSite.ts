import { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import { useRouter } from "next/router";
import SearchService from "../../../../../../../Share/Services/Search";
import { IBrand } from "../../../../../../../infrastructure/Models/Entity/IBrand";
import { IMieter } from "../../../../../../../infrastructure/Models/Entity/IMieter";
import { ISearchSiteProduct } from "../../../../../../../Share/Models/Search/ISearchSiteResponse";
import isClient from "../../../../../../../../utils/isClient";
import formatSearchLink from "../../../../../../../Share/Helpers/Links/formatSearchLink";

export interface IHookProps {
  searchValue: string;
  searchHistories: string[];
  searchBoxRef: any;
  showSearchResult: boolean;
  firstView: boolean;
  pProduct: ISearchSiteProduct[];
  pCategories: ISearchSiteProduct[];
  sProduct: ISearchSiteProduct[];
  sCategories: ISearchSiteProduct[];
  mieters: Partial<IMieter>[];
  brands: IBrand[];
  onSearchValueChange: (userTyping: string) => void;
  onSelectFromHistoryList: (history: string) => void;
  onSubmit: () => void;
  searchNotFound: () => boolean;
  toggleSearchResult: (status: boolean) => void;
  onSelectSearchKey: (searchValueHistory: string) => void;
}

const useSearchSite = (): IHookProps => {
  const [searchValue, setSearchValue] = useState("");
  const [firstView, setFirstView] = useState(true);
  const searchBoxRef = useRef(null);
  const [showSearchResult, toggleSearchResult] = useState(false);

  const routing = useRouter();

  // backend response ====================================================
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [mieters, setMieters] = useState<Partial<IMieter>[]>([]);
  const [pProduct, setPProduct] = useState<ISearchSiteProduct[]>([]);
  const [sProduct, setSProduct] = useState<ISearchSiteProduct[]>([]);
  const [sCategories, setSCategory] = useState<ISearchSiteProduct[]>([]);
  const [pCategories, setPCategory] = useState<ISearchSiteProduct[]>([]);
  // ====================================================

  const onToggleSearchResult = (): void => {
    toggleSearchResult(false);
  };

  const searchNotFound = (): boolean => {
    if (
      brands.length === 0 &&
      mieters.length === 0 &&
      pCategories.length === 0 &&
      pProduct.length === 0 &&
      sProduct.length === 0 &&
      sCategories.length === 0
    ) {
      return true;
    }
    return false;
  };

  const onSubmit = (value: string = searchValue) => {
    routing.push(formatSearchLink({ SearchValue: value, CategoryId: 0 }));
    toggleSearchResult(false);
    setSearchValue("");
  };

  const onFetchSearchList = (newSearchValue: string) => {
    setSearchValue(newSearchValue);
    toggleSearchResult(true);
    SearchService.searchSite({ SearchValue: newSearchValue })
      .then(res => {
        setFirstView(false);
        setBrands(res?.data?.Data?.Brands);
        setPProduct(res?.data?.Data?.Products?.Products);
        setPCategory(res?.data?.Data?.Products?.Categories);
        setMieters(res?.data?.Data?.Mieters);
        setSProduct(res?.data?.Data?.Services.Products);
        setSCategory(res?.data?.Data?.Services.Categories);
      })
      .catch(() => {
        setFirstView(false);
      });
  };

  const onSelectFromHistoryList = (newSearchValue: string) => {
    setSearchValue(newSearchValue);
    onFetchSearchList(newSearchValue);
  };

  const onSearchValueChange = (newSearchValue: string) => {
    if (newSearchValue.length === 0) {
      setFirstView(true);
    }
    if (newSearchValue.length > 2) {
      onFetchSearchList(newSearchValue);
    } else {
      setSearchValue(newSearchValue);
    }
  };

  const getSearchValueFromLocalstorage = (): string[] => {
    const tempItem = isClient()
      ? localStorage.getItem("search-site-history")
      : "[]";
    if (tempItem !== null) {
      return JSON.parse(tempItem);
    }
    return [];
  };

  const setSearchValueInLocalstorage = (newSearchValue: string) => {
    let searchHistory: string[] = [];
    const searchHistoryList = getSearchValueFromLocalstorage();
    if (searchHistoryList.findIndex(sear => sear === newSearchValue) === -1) {
      searchHistory.push(newSearchValue);
    }
    searchHistory = searchHistory.concat(searchHistoryList);
    localStorage.setItem(
      "search-site-history",
      JSON.stringify(searchHistory.slice(0, 4)),
    );
  };

  const onSelectSearchKey = (searchValueHistory: string) => {
    toggleSearchResult(false);
    setFirstView(true);
    setSearchValue("");
    setSearchValueInLocalstorage(searchValueHistory);
  };

  const searchHistories = getSearchValueFromLocalstorage();

  // use hooks ===========================================================
  useOnClickOutside(searchBoxRef, () => onToggleSearchResult());
  // ====================================================

  return {
    searchValue,
    onSearchValueChange,
    showSearchResult,
    searchNotFound,
    searchBoxRef,
    toggleSearchResult,
    mieters,
    onSubmit,
    brands,
    pProduct,
    sProduct,
    pCategories,
    onSelectSearchKey,
    sCategories,
    firstView,
    searchHistories,
    onSelectFromHistoryList,
  };
};

export default useSearchSite;
