import React from "react";
import dynamic from "next/dynamic";
import BaseResponsive from "../../infrastructure/BaseComponents/BaseResponsive";
import { ISdpContext } from "./Models/IContext";
import { IService } from "../../infrastructure/Models/Entity/IService";
import { IPicture } from "../../infrastructure/Models/Entity/IPicture";
import { ICategory } from "../../infrastructure/Models/Entity/ICategory";
import { IMieter } from "../../infrastructure/Models/Entity/IMieter";
import { IFeaturedSpecificationAttributes } from "../../infrastructure/Models/Entity/IFeaturedSpecificationAttributes";
import { IBreadcrumb } from "../../infrastructure/Models/Entity/IBreadcrumb";

// import dynamic pages
const Mobile = dynamic(() => import("./Mobile/SdpMobile"));
const Desktop = dynamic(() => import("./Desktop/SdpDesktop"));

export const sdpContext = React.createContext({} as ISdpContext);

interface ISdpContainer {
  data: {
    Service: IService;
    Pictures: IPicture[];
    Category: ICategory;
    Mieter: IMieter;
    Breadcrumb: IBreadcrumb[];
    FeaturedSpecificationAttributes: IFeaturedSpecificationAttributes[];
  };
}

const SdpContainer = (props: ISdpContainer) => {
  const returnContext = (): ISdpContext => {
    return {
      Category: props.data.Category,
      ImagesService: props.data.Pictures,
      Mieter: props.data.Mieter,
      Service: props.data.Service,
      Breadcrumb: props.data.Breadcrumb,
      Specification: props.data.FeaturedSpecificationAttributes,
    };
  };

  return (
    <sdpContext.Provider value={returnContext()}>
      <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
        {(Sdp: any) => <Sdp />}
      </BaseResponsive>
    </sdpContext.Provider>
  );
};

export default SdpContainer;
