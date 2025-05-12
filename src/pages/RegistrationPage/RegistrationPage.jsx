import { NavLink } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";
export default function RegistrationPage() {
  return (
    <div className={s.page_container}>
      {" "}
      <div className={s.wrapper}>
        <div className={s.side}>
          <p className={s.text}>
            Sign up now to unlock all the awesome features — your data’s safe
            with us, promise!
            <span role="img" aria-label="Greeting icon">
              😎
            </span>
          </p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}
