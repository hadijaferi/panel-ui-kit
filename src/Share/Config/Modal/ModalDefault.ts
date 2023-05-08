import { ModalProps } from "react-responsive-modal";
import style from "./ModalDefault.module.sass";

export const ModalDefault: Partial<ModalProps> = {
  // you can use style for modal with minWidth
  animationDuration: 300,
  closeOnEsc: true,
  blockScroll: true,
  classNames: {
    modal: style.acModal,
    closeButton: style.closeButton,
    root: style.root,
  },
};
