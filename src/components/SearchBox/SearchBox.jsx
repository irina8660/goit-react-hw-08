import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import {
  changeContactsFilter,
  selectContactsFilter,
} from "../../redux/filtersSlice";
import { useId } from "react";

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const contactsFilter = useSelector(selectContactsFilter);

  const handleChange = (e) => {
    dispatch(changeContactsFilter(e.target.value.trim()));
  };

  return (
    <div className={s.search_form__wrapper}>
      <p className={s.search_form__header}>Search by name</p>
      <input
        name="text"
        className={s.search_form__input}
        type="text"
        id={id}
        value={contactsFilter}
        placeholder="search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
