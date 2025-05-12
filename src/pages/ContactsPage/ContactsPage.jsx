import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import s from "./ContactsPage.module.css";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import { VscAdd } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import clsx from "clsx";
import { useState } from "react";

export default function ContactPage() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSearchClick = () => {
    setIsSearchVisible(true);
    setIsAddVisible(false);
  };

  const handleAddClick = () => {
    setIsAddVisible(true);
    setIsSearchVisible(false);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <div className={s.side}>
        <div className={s.button_wrapper}>
          <button
            className={clsx(s.button, s.search)}
            type="button"
            onClick={handleSearchClick}
          >
            <CiSearch />
          </button>
          <button
            className={clsx(s.button, s.add)}
            type="button"
            onClick={handleAddClick}
          >
            <VscAdd />
          </button>
        </div>
        {isSearchVisible && <SearchBox />}
        {isAddVisible && <ContactForm />}
      </div>
      {isLoading ? <Loader /> : <ContactList />}
    </div>
  );
}
