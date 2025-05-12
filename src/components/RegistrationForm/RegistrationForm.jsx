import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { CiAt } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (value === "admin") {
    error = "Nice try!";
  }
  return error;
}

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    console.log(values);
    dispatch(register(values));
    action.resetForm();
  };
  return (
    <div className={s.form_wrapper}>
      <p className={s.text}>Create account!</p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.input_wrapper}>
            <CiUser className={s.icon} />
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Input user name"
              autoComplete="email"
            />
          </div>
          <div className={s.input_wrapper}>
            <CiAt className={s.icon} />
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="Input user email"
              autoComplete="email"
            />
          </div>
          <div className={s.input_wrapper}>
            <CiLock className={s.icon} />
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Create password"
            />
          </div>
          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
      <div className={s.login_link_wrapper}>
        <p>Have account?</p>
        <NavLink className={s.link} to="/login">
          Log In
        </NavLink>
      </div>
    </div>
  );
};

export default RegistrationForm;
//   <Formik
//     initialValues={{ name: "", number: "" }}
//     onSubmit={}
//     // validationSchema={validationSchema}
//   >
//     <Form className={s.form}>
//       <Field
//         className={s.input}
//         type="email"
//         name="email"
//         placeholder="User email"
//       />
//       <ErrorMessage name="number" component="div" className={s.error} />
//             <ErrorMessage name="name" component="div" className={s.error} />
//                       <Field
//         className={s.input}
//         type="password"
//         name="name"
//         placeholder="Password"
//       />
//       <ErrorMessage name="name" component="div" className={s.error} />
//       <button className={s.button} type="submit">
//         Continue
//       </button>
//     </Form>
//   </Formik>
//     );
// }
