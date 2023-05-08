import React, { FC } from "react";
import Modal from "react-responsive-modal";
import { ModalDefault } from "../../../Config/Modal/ModalDefault";
import loading from "../../../../Resources/image/loading.svg";
import logoLoading from "../../../../Resources/image/logo2.svg";
import style from "./AcLoadingModal.module.sass";

interface AcLoadingModalProps {
  isOpen: boolean;
}

export const AcLoadingModal: FC<AcLoadingModalProps> = props => {
  return (
    <Modal
      {...ModalDefault}
      onClose={() => {}}
      open={props.isOpen}
      center
      closeOnEsc={false}
      showCloseIcon={false}
      styles={{
        modal: {
          minWidth: "350px",
        },
      }}>
      <div className="d-flex flex-column flex-y-center">
        <div className={style.loadingLogo}>
          <img src={loading} alt="" />
        </div>
        <div className={style.logo}>
          <img src={logoLoading} alt="" />
        </div>
      </div>
    </Modal>
  );
};
