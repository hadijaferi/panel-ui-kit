import { useEffect, useState } from "react";
import { IProduct } from "../../../../../infrastructure/Models/Entity/IProduct";
import ProductItemsServices from "../Services/ProductItems";

interface IUseProductItemsProps {
  productId: number;
  type:
    | "suggest-secondary"
    | "suggests"
    | "mieter-products"
    | "similar"
    | "others-bought";
}

interface IReturnUsePdpProductItems {
  productItems: IProduct[];
  isLoading: boolean;
}
const usePdpProductItems = (props: IUseProductItemsProps) => {
  const [productItems, setProductItems] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProductItems = () => {
    ProductItemsServices.getProductItems(props.productId, props.type, {
      PageIndex: 1,
      PageSize: 20,
    })
      .then(res => {
        setProductItems(res.data.Data.Items);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProductItems();
  }, [props.productId]);

  const returnProps = (): IReturnUsePdpProductItems => {
    return {
      isLoading,
      productItems,
    };
  };
  return returnProps();
};

export default usePdpProductItems;
