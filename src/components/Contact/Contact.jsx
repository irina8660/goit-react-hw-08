import s from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={s.contact__item_wrapper}>
      <ul className={s.contact__item}>
        <li>
          <IoPerson /> {name}
        </li>
        <li>
          <FaPhone /> {number}
        </li>
      </ul>
      <button
        className={s.contact__button}
        onClick={() => {
          handleDelete(id);
        }}
        type="button"
      >
        <MdDeleteOutline />
      </button>
    </div>
  );
}
