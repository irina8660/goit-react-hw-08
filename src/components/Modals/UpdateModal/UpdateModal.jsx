import Modal from "react-modal";
import s from "./UpdateModal.module.css";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CiPhone } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { updateContact } from "../../../redux/contacts/operations";
import clsx from "clsx";
import { VscClose } from "react-icons/vsc";

Modal.setAppElement("#root");

function UpdateModal({ isOpen, onClose, contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(updateContact({ id, name: values.name, number: values.number }));
    actions.resetForm();
    onClose();
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
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={s.content}>
        <Formik
          initialValues={{
            name: name,
            number: number,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          <Form className={s.form}>
            <button type="button" className={s.cancel} onClick={onClose}>
              <VscClose />
            </button>
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
            <button type="submit" className={clsx(s.confirm, s.button)}>
              save
            </button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
}

export default UpdateModal;
