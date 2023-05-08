import { useContext } from "react";
import { sdpContext } from "../Container";

const useBreadcrumb = () => {
  const Context = useContext(sdpContext);
  const { Breadcrumb } = Context;
  return {
    Breadcrumb,
  };
};

export default useBreadcrumb;
