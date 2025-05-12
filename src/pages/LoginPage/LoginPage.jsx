import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={s.page_container}>
      <div className={s.wrapper}>
        <LoginForm />
        <div className={s.side}>
          <p className={s.text}>
            Don’t worry, your data is under lock and key — not even we can peek
            inside!
            <span role="img" aria-label="Greeting icon">
              🥷🏼
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
