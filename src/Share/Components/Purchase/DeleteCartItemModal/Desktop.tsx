import React from "react";
import Modal from "react-responsive-modal";
import IDeleteCartItemModalProps from "./Models/IDeleteCartItemModalProps";
import { ModalDefault } from "../../../Config/Modal/ModalDefault";
import Button from "../../Common/Button/Button";

export default function Desktop(props: IDeleteCartItemModalProps) {
  return (
    <div>
      <Modal
        center
        {...ModalDefault}
        open={props.isOpen}
        onClose={props.closeAction}>
        <div className="fontSize-16 fontWeight-700">
          آیا مایل به حذف این کالا هستید؟
        </div>
        <div className="modalBody">
          <div className="row">
            <div className="col-6">
              <Button
                theme="bordered"
                radius="radius16"
                color="gray"
                size="medium"
                className="col-12"
                onClick={props.closeAction}>
                لغو
              </Button>
            </div>
            <div className="col-6">
              <Button
                isLoading={props.isLoading}
                color="red"
                radius="radius16"
                size="medium"
                className="col-12"
                onClick={props.deleteAction}>
                حذف
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
