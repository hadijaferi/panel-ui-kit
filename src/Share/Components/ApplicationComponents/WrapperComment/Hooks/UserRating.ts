import { useEffect, useState } from "react";
import { IRate } from "../../../../../infrastructure/Models/Entity/IRate";
import UserRatingServices from "../Services/UserRating";

interface IUseUserRating {
  EntityId: number;
  title: string;
}

export interface IReturnUseUserRating {
  rates: IRate[];
  totalItems: number;
  isLoading: boolean;
  rate: number;
  title: string;
}

const useUserRating = (props: IUseUserRating) => {
  const [rate, setRate] = useState<number>(0);
  const [rates, setRates] = useState<IRate[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getReviewsOverall = () => {
    UserRatingServices.getOverall({ ProductId: props.EntityId })
      .then(res => {
        setIsLoading(false);
        setTotalItems(res.data?.Data?.TotalItems);
        setRates(res.data?.Data?.Rates);
        setRate(res.data?.Data?.Rate);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getReviewsOverall();
  }, []);
  const returnProps = (): IReturnUseUserRating => {
    return {
      isLoading,
      rates,
      rate,
      totalItems,
      title: props.title,
    };
  };

  return returnProps();
};

export default useUserRating;
