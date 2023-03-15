import useOnClickOutside from "hooks/useClickOutside";
import { useEffect, useRef } from "react";


const Modal = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, closeModal);

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
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto text-black">
          <div
            className="fixed inset-0 transition-opacity"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          </div>
          <div
            className="bg-white rounded-lg z-10 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
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
