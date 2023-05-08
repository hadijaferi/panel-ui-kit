import { useContext } from "react";
import { ShopContext } from "../Container";
import { IShopContext } from "../Models/IShopContext";

export default function useGetShop(): IShopContext {
  return useContext(ShopContext);
}
