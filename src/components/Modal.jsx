import React, { useEffect, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";

const Modal = ({ message }) => {
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const timer = setTimeout(() => setFadeClass("fade-out"), 4500); // Start fade out at 4.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${fadeClass}`}
    >
      <div className="bg-white py-6 px-12 rounded-3xl shadow-lg text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <BiCheckCircle className="text-primary text-[100px]" />
          <h2 className="text-2xl font-bold mb-4">{message}</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
