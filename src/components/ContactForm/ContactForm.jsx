import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";

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
      <Form className={s.contact_form__wrapper}>
        <Field
          className={s.contact_form__input}
          type="text"
          name="name"
          placeholder="input name..."
        />
        <ErrorMessage name="name" component="div" className={s.error} />
        <Field
          className={s.contact_form__input}
          type="text"
          name="number"
          placeholder="input phone number..."
        />
        <ErrorMessage name="number" component="div" className={s.error} />
        <button className={s.contact_form__button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
