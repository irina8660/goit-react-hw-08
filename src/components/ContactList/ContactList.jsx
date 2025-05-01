import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={s.contact__list_wrapper}>
      <ul className={s.contact_list}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li className={s.contact_list__item} key={contact.id}>
              <Contact contact={contact} onDelete={handleDelete} />
            </li>
          ))
        ) : (
          <li>No contacts...</li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
