import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";
import { CiLogout } from "react-icons/ci";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  const user = useSelector(selectUser);

  console.log(user);
  return (
    <div className={s.wrapper}>
      <span className={s.text}>
        Hello, <b className={s.b}>{user.name}</b>
      </span>
      <button type="button" className={s.button} onClick={handleClick}>
        <CiLogout className={s.icon} />
      </button>
    </div>
  );
};

export default UserMenu;
