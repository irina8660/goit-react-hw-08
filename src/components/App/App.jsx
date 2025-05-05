import s from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { ErrorMessage } from "formik";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const isLoading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <h1 className={s.header}>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
