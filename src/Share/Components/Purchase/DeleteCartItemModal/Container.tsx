import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import BaseResponsive from "../../../../infrastructure/BaseComponents/BaseResponsive";
import { IRootState } from "../../../Store/Reducer";
import {
  CartDeleteItem,
  CartToggleDeleteItemModal,
} from "../../../Store/Cart/actions";
import IResponse from "../../../../infrastructure/Models/HttpClient/IResponse";

const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));

function DeleteCartItemContainer() {
  const [isLoading, toggleLoading] = useState(false);
  const isOpen = useSelector(
    (state: IRootState) => state.cart.deleteItemConfirmModalIsOpen,
  );
  const cartItemId = useSelector(
    (state: IRootState) => state.cart.deleteItemConfirmId,
  );
  const dispatch = useDispatch();
  const closeAction = () => dispatch(CartToggleDeleteItemModal(false, -1));
  const deleteAction = () => {
    toggleLoading(true);
    dispatch<Promise<IResponse>>(CartDeleteItem(cartItemId) as any)
      .then(res => {
        if (res.data.IsSuccess) {
          closeAction();
        }
      })
      .finally(() => toggleLoading(false));
  };

  return (
    <BaseResponsive MobileComponent={Mobile} DesktopComponent={Desktop}>
      {(Cmp: any) => (
        <Cmp {...{ isOpen, closeAction, deleteAction, isLoading }} />
      )}
    </BaseResponsive>
  );
}

export default DeleteCartItemContainer;
