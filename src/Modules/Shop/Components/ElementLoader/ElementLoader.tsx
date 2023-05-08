import React, { useEffect } from "react";
import IVitrinElement from "../../Models/IVitrinElement";
import useLoadElement from "../../Hooks/useLoadElement";

interface IElementLoaderProps extends IVitrinElement {
  Comp: any;
  index: number;
}

export default function ElementLoader(props: IElementLoaderProps) {
  const useElement = useLoadElement(props);
  useEffect(() => {
    /*    setTimeout(() => {
      useElement.loadElement();
    }, props.index * 500); */
    useElement.loadElement();
  }, []);

  if (useElement.props.isError) {
    return <div />;
    // return <div className={style.errorLoadItem}>خطا در بارگذاری آیتم</div>;
  }
  return (
    <div className="m-t-24">
      <props.Comp {...useElement.props} />
    </div>
  );
}
