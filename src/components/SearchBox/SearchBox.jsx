import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectFilter } from "../../redux/filters/selectors";
import { useId } from "react";
import { CiSearch } from "react-icons/ci";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();

  const query = useSelector(selectFilter);

  const handleChange = (e) => {
    console.log("Filter value:", e.target.value);
    dispatch(changeFilter(e.target.value.trim()));
  };

  return (
    <div className={s.wrapper}>
      {/* <CiSearch className={s.icon} /> */}
      <input
        name="text"
        className={s.input}
        type="text"
        id={id}
        value={query}
        placeholder="Search by name or number ..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
