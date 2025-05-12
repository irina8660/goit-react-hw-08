import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import { CiAt, CiLock } from "react-icons/ci";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };

  return (
    <div className={s.form_wrapper}>
      <p className={s.text}>Log in!</p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.input_wrapper}>
            <CiAt className={s.icon} />
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="E-mail"
              autoComplete="email"
              validate={validateEmail}
            />
          </div>
          <div className={s.input_wrapper}>
            <CiLock className={s.icon} />
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button className={s.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
      <div className={s.login_link_wrapper}>
        <p>No account?</p>
        <NavLink className={s.link} to="/register">
          Create account
        </NavLink>
      </div>
    </div>
  );
};

export default LogInForm;

//ira.efremova95@gmail.com
//ira3566ira
