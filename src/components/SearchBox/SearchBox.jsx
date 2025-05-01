import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value.trim()));
  };

  return (
    <div className={s.search_form__wrapper}>
      <p className={s.search_form__header}>Search by name</p>
      <input
        name="text"
        className={s.search_form__input}
        type="text"
        value={filter}
        placeholder="search..."
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
