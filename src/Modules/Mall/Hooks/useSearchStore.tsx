import React, { useRef, useState } from "react";
import StoreServices from "../Services/Store";
import useFloor from "./useFloor";
import { IStore } from "../Models/Store/IStore";
import { ICity } from "../../../infrastructure/Models/Entity/ICity";
import { ICategory } from "../../../infrastructure/Models/Entity/ICategory";

interface IFilters {
  searchValue: string;
}

const useSearchStore = () => {
  const filters = useRef<IFilters>({
    searchValue: "",
  });
  // const [filters, setFilters] = useState<{}>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [stores, setStores] = useState<IStore[]>([]);
  const [Cities, setCities] = useState<ICity[]>([]);
  const [categories, setCategories] = React.useState<ICategory[]>([]);
  const floor = useFloor();

  const getStoreList = (reset: boolean) => {
    setIsLoading(true);
    StoreServices.getStoreList({
      PageIndex: 1,
      SearchValue: filters?.current.searchValue,
      PageSize: 100,
      FloorId: floor.FloorSelected.Id,
      HasProduct: true,
    }).then((res: any) => {
      if (res.data.IsSuccess) {
        setCategories(res.data.Data.Categories);
        setCities(res.data.Data.Cities);
        setStores(res.data.Data.Mieters);
        setIsLoading(false);
        if (reset) {
          setStores([...res?.data?.Data?.Mieters]);
        } else {
          setStores([...stores, ...res?.data?.Data?.Mieters]);
        }
      }
    });
  };
  const setFilter = (newFilters: { name: string; value: any }) => {
    filters.current = {
      ...filters.current,
      [newFilters.name]: newFilters.value,
    };
    // return new Promise(resolve => {
    // setFilters(preFilters => {
    //   resolve({
    //     ...preFilters,
    //     [newFilters.name]: newFilters.value,
    //   });
    //   return {
    //     ...preFilters,
    //     [newFilters.name]: newFilters.value,
    //   };
    // });
    // });
  };
  const deleteFilter = (name: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete filters[name];
  };

  return {
    stores,
    isLoading,
    Cities,
    filters,
    categories,
    getStoreList,
    setFilter,
    deleteFilter,
  };
};
export default useSearchStore;
