import { useContext } from "react";
import { IMieter } from "../../../../infrastructure/Models/Entity/IMieter";
import { sdpContext } from "../../Container";

type IReturnUseGetCategory = IMieter;
const useGetCategory = () => {
  const contextSdp = useContext(sdpContext);
  const returnProps = (): IReturnUseGetCategory => {
    const { Mieter } = contextSdp;
    return Mieter;
  };

  return returnProps();
};

export default useGetCategory;
