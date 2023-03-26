
import { useEffect, useRef } from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef(null)
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden text-black ">
          <div
            className="fixed inset-0 transition-opacity"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          </div>
          <div
            className="modal-box bg-white rounded-lg z-10 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full max-h-[90vh] overflow-y-auto"
            ref={modalRef}
            
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
