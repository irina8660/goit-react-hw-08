import Modal from "react-modal";
import s from "./ConfirmModal.module.css";
import clsx from "clsx";
import { VscClose } from "react-icons/vsc";

Modal.setAppElement("#root");

function ConfirmModal({ isOpen, onClose, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={s.content}>
        <button className={clsx(s.cancel, s.button)} onClick={onClose}>
          <VscClose />
        </button>
        <p>Delete this contact?</p>
        <button className={clsx(s.confirm, s.button)} onClick={onConfirm}>
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
