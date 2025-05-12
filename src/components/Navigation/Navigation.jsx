import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { CiPhone } from "react-icons/ci";
import { CiHome } from "react-icons/ci";

const updateClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink className={updateClass} to="/">
        <div className={s.link_wrapper}>
          <CiHome />
          <span className={s.text}>Home</span>
        </div>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={updateClass} to="/contacts">
          <div className={s.link_wrapper}>
            <CiPhone />

            <span className={s.text}>Contacts</span>
          </div>
        </NavLink>
      )}
    </nav>
  );
}
