import s from "./ContactForm.module.css";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
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
};

export default ContactForm;
