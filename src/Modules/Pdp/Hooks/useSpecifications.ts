import { useContext } from "react";
import { IFeaturedSpecificationAttributes } from "../../../infrastructure/Models/Entity/IFeaturedSpecificationAttributes";
import { sdpContext } from "../../Sdp/Container";

interface IReturnUseSpecifications {
  specifications: IFeaturedSpecificationAttributes[];
}
const useSpecifications = () => {
  const contextSdp = useContext(sdpContext);
  const returnProps = (): IReturnUseSpecifications => {
    const { Specification } = contextSdp;
    return {
      specifications: Specification,
    };
  };

  return returnProps();
};

export default useSpecifications;
