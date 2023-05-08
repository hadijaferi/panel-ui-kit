import React, { FC } from "react";
import dynamic from "next/dynamic";
import { IService } from "../../../../infrastructure/Models/Entity/IService";
import IVitrinBaseComponentProps from "../../Models/IVitrinBaseComponentProps";
import { IProduct } from "../../../../infrastructure/Models/Entity/IProduct";
import BaseResponsive from "../../../../infrastructure/BaseComponents/BaseResponsive";

interface IVitrinItemListWrapperProps extends IVitrinBaseComponentProps {
  ServiceItems?: Partial<IService>[];
  ProductItems?: Partial<IProduct>[];
}

const Mobile = dynamic(
  () =>
    import("../../../../Share/Components/ListSection/Mobile/ListSectionMobile"),
);
const Desktop = dynamic(
  () =>
    import(
      "../../../../Share/Components/ListSection/Desktop/ListSectionDesktop"
    ),
);

const VitrinItemListWrapper: FC<IVitrinItemListWrapperProps> = props => {
  const { vitrinType } = props;

  const mapItems = (oldItems: any[]) => {
    if (props.vitrinType === "product") {
      return oldItems.map(item => {
        return {
          ...item,
          Id: item.ProductId,
          Name: item.ProductName,
        };
      });
    }
    return oldItems.map(item => {
      return {
        ...item,
        Id: item.ServiceId,
        Name: item.ServiceName,
      };
    });
  };

  const items = mapItems(
    (vitrinType === "product" ? props.ProductItems : props.ServiceItems) ?? [],
  );

  return (
    <BaseResponsive DesktopComponent={Desktop} MobileComponent={Mobile}>
      {(Component: any) => (
        <Component
          Name={props.VitrinElementName}
          Items={items}
          Loading={props.isLoading}
          Type={vitrinType}
        />
      )}
    </BaseResponsive>
  );
};
export default VitrinItemListWrapper;
