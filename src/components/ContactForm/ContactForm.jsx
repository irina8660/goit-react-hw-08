import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import { CiPhone } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim("No leading or trailing spaces")
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Name is required"),
    number: Yup.string()
      .trim("No leading or trailing spaces")
      .matches(/^\+?[0-9\s\-()]{7,20}$/, "Phone number is not valid")
      .required("Phone number is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <div className={s.wrapper}>
          <div className={s.input_wrapper}>
            <CiUser className={s.icon} />
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Input name..."
            />
          </div>
          <ErrorMessage name="name" component="div" className={s.error} />
          <div className={s.input_wrapper}>
            <CiPhone className={s.icon} />
            <Field
              className={s.input}
              type="text"
              name="number"
              placeholder="Input phone number..."
            />
          </div>
          <ErrorMessage name="number" component="div" className={s.error} />
        </div>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
