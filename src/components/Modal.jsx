// src/components/Modal.jsx

import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md animate-fade-in-up">
        <div>{children}</div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary/80 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
