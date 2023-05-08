import { useContext } from "react";
import { IService } from "../../../../infrastructure/Models/Entity/IService";
import { sdpContext } from "../../Container";
import { ICategory } from "../../../../infrastructure/Models/Entity/ICategory";

interface IReturnUseGetService {
  service: IService;
  category: ICategory;
}
const useGetService = () => {
  const contextSdp = useContext(sdpContext);
  const returnProps = (): IReturnUseGetService => {
    const { Service, Category } = contextSdp;
    return {
      service: Service,
      category: Category,
    };
  };

  return returnProps();
};

export default useGetService;
