import { IFeaturedSpecificationAttributes } from "../../../infrastructure/Models/Entity/IFeaturedSpecificationAttributes";
import { usePdpProductDetails } from "./usePdpProductId";

interface IReturnUseSpecifications {
  specifications: IFeaturedSpecificationAttributes[];
}

const usePdpSpecifications = () => {
  const productDetails = usePdpProductDetails();
  const returnProps = (): IReturnUseSpecifications => {
    return {
      specifications: productDetails?.FeaturedSpecificationAttributes || [],
    };
  };

  return returnProps();
};

export default usePdpSpecifications;
