import withSweetAlert from "HOCS/sweetAlert";
import React from "react";
const MyButton = ({ handleConfirm, label }) => {
  return <button onClick={handleConfirm}>{label}</button>;
};

export default withSweetAlert(MyButton);
