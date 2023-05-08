import React from "react";
import dynamic from "next/dynamic";
import IVitrinElement from "../../Models/IVitrinElement";
import BaseResponsive from "../../../../infrastructure/BaseComponents/BaseResponsive";

type ICommentWrapperProps = IVitrinElement;

const Desktop = dynamic(
  () =>
    import(
      "../../../../Share/Components/ApplicationComponents/WrapperComment/Desktop/WrapperComment"
    ),
);
const Mobile = dynamic(
  () =>
    import(
      "../../../../Share/Components/ApplicationComponents/WrapperComment/Mobile/WrapperComment"
    ),
);
const CommentWrapper = (_props: ICommentWrapperProps) => {
  // const shopCtx = useGetShop();
  return (
    <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
      {(Component: any) => <Component titleRating="" entityId={3} />}
    </BaseResponsive>
  );
};

export default CommentWrapper;
