import s from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const Contact = ({ onDelete, contact: { id, name, number } }) => {
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
          onDelete(id);
        }}
        type="button"
      >
        <MdDeleteOutline />
      </button>
    </div>
  );
};

export default Contact;
