import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ onDelete, contacts }) => {
  return (
    <div className={s.contact__list_wrapper}>
      <ul className={s.contact_list}>
        {contacts.map((contact) => (
          <li className={s.contact_list__item} key={contact.id}>
            <Contact
              onDelete={onDelete}
              contact={contact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
