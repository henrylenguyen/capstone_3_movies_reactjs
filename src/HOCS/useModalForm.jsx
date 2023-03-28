import { useState } from "react";
import Modal from "../components/admin/modal/Modal";
import Form from "../components/admin/form/Form";

const useModalForm = ({
  schema,
  fields,
  handleSubmitForm,
  title,
  initialValues,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const ModalForm = () => (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="p-10">
        <Form
          schema={schema}
          fields={fields}
          closeModal={closeModal}
          handleSubmitForm={handleSubmitForm}
          title={title}
          initialValues={initialValues}
        />
      </div>
    </Modal>
  );

  return { ModalForm, openModal, closeModal, handleSubmitForm };
};

export default useModalForm;
