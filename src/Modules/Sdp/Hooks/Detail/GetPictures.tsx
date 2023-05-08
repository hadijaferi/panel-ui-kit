import { useContext } from "react";
import { sdpContext } from "../../Container";
import { IPicture } from "../../../../infrastructure/Models/Entity/IPicture";

interface IReturnUseGetCategory {
  pictures: IPicture[];
}
const useGetPictures = () => {
  const contextSdp = useContext(sdpContext);
  const returnProps = (): IReturnUseGetCategory => {
    const { ImagesService } = contextSdp;
    return {
      pictures: ImagesService,
    };
  };

  return returnProps();
};

export default useGetPictures;
