import s from "./SearchBox.module.css";
const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.search_form__wrapper}>
      <p className={s.search_form__header}>Search by name</p>
      <input
        className={s.search_form__input}
        type="text"
        value={value}
        placeholder="search..."
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
