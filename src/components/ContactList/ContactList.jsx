import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <div className={s.contact__list_wrapper}>
      <ul className={s.contact_list}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li className={s.contact_list__item} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))
        ) : (
          <li>No contacts...</li>
        )}
      </ul>
    </div>
  );
}
