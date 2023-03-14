import React, { useState } from 'react';
import { Button, message } from 'antd';
import ModalForm from './SignupForm';
const AddNewFilm = () => {
   const [modalVisible, setModalVisible] = useState(false);

  const handleSignUp = async (data) => {
    console.log(data);
    message.success('Sign Up Success!');
    setModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={() => setModalVisible(true)}>
        Sign Up
      </Button>

      <ModalForm visible={modalVisible} onClose={() => setModalVisible(false)} onSubmit={handleSignUp} />
    </div>
  );
}


export default AddNewFilm;