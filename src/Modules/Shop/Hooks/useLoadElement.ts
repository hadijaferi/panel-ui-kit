import { useState } from "react";
import IVitrinElement from "../Models/IVitrinElement";
import Vitrin from "../Services/Vitrin";

interface ILoadElementProps {
  props: IVitrinElement;
  loadElement: () => void;
}

export default function useLoadElement(
  elementProps: IVitrinElement,
): ILoadElementProps {
  const [isLoading, toggleLoading] = useState(false);
  const [error, toggleError] = useState(false);
  const [element, setElement] = useState<IVitrinElement | null>(null);

  const loadElement = () => {
    toggleLoading(true);
    Vitrin.getElement({
      ElementId: elementProps.VitrinElementId,
      ElementTypeId: elementProps.VitrinElementTypeId,
    })
      .then(res => {
        if (res.data.IsSuccess && res.data.Data) {
          setElement(res.data.Data);
        } else {
          toggleError(true);
        }
      })
      .finally(() => toggleLoading(false))
      .catch(() => {
        toggleError(true);
        toggleLoading(false);
      });
  };

  return {
    props: {
      ...elementProps,
      ...element,
      isError: error,
      isLoading,
    },
    loadElement,
  };
}
