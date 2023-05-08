import { useEffect, useState } from "react";
import { IMieter } from "../../../../../infrastructure/Models/Entity/IMieter";
import OtherSellersServices from "../Services/OtherSellers";

interface IUseOtherSellersProps {
  mieterId: number;
}

interface IReturnUseOtherSellers {
  otherSellers: IMieter[];
  isLoading: boolean;
}
const useOtherSellers = (props: IUseOtherSellersProps) => {
  const [otherSellers, setOtherSellers] = useState<IMieter[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getOtherSellers = () => {
    OtherSellersServices.getOtherSellers({
      vendorId: props.mieterId,
    })
      .then(res => {
        setOtherSellers(res.data.Data.Mieters);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getOtherSellers();
  },[]);

  const returnProps = (): IReturnUseOtherSellers => {
    return {
      isLoading,
      otherSellers,
    };
  };
  return returnProps();
};

export default useOtherSellers;
