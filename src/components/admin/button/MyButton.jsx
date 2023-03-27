import withSweetAlert from "HOCS/sweetAlert";
import React from "react";
const MyButton = ({ handleConfirm, children,className="" }) => {
  return (
    <button onClick={handleConfirm} className={className}>
      {children}
    </button>
  );
};

export default withSweetAlert(MyButton);
