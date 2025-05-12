import s from "./Contact.module.css";
import { CiEdit, CiPhone, CiTrash, CiUser } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import ConfirmModal from "../Modals/ConfirmModal/ConfirmModal";
import UpdateModal from "../Modals/UpdateModal/UpdateModal";

export default function Contact({ contact: { id, name, number } }) {
  console.log({ id, name, number });
  const dispatch = useDispatch();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setIsConfirmModalOpen(false);
  };

  const handleUpdate = () => {
    dispatch(updateContact(id));
    setIsUpdateModalOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <ul className={s.item}>
        <li className={s.field}>
          <CiUser className={s.icon} /> {name}
        </li>
        <li className={s.field}>
          <CiPhone className={s.icon} /> {number}
        </li>
      </ul>
      <div className={s.button_wrapper}>
        <button
          className={s.button_edit}
          type="button"
          onClick={() => setIsUpdateModalOpen(true)}
        >
          <CiEdit className={s.icon} />
        </button>
        <button
          className={s.button_delete}
          onClick={() => setIsConfirmModalOpen(true)}
          type="button"
        >
          <CiTrash className={s.icon} />
        </button>
      </div>

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={handleDelete}
      />
      <UpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onConfirm={handleUpdate}
        contact={{ id, name, number }}
      />
    </div>
  );
}
