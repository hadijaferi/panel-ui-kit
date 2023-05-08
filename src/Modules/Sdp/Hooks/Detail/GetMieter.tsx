import { useContext } from "react";
import { IMieter } from "../../../../infrastructure/Models/Entity/IMieter";
import { sdpContext } from "../../Container";

type IReturnUseGetMieterService = IMieter;
const useGetMieter = () => {
  const contextSdp = useContext(sdpContext);
  const returnProps = (): IReturnUseGetMieterService => {
    const { Mieter } = contextSdp;
    return Mieter;
  };

  return returnProps();
};

export default useGetMieter;
