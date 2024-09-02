// src/components/CashoutOptions.jsx

import React from "react";
import { IoCashOutline } from "react-icons/io5";

const CashoutOptions = ({ onDirectCashout, onPromoCode }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 animate-fade-in-up transition-transform transform hover:scale-105 border border-gray-50">
      <div className="flex items-center gap-2 text-xl   text-primary font-bold  mb-4">
        <h2 className="">Cashout Options</h2>
        <IoCashOutline size={15} />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onDirectCashout}
          className="bg-primary text-white font-medium py-2 px-4 rounded hover:bg-primary/90 transition-all duration-300"
        >
          Direct Cashout
        </button>
        <button
          onClick={onPromoCode}
          className="bg-tertiary/70 text-primary font-medium py-2 px-4 rounded hover:bg-tertiary transition-all duration-300"
        >
          Convert to Promo Code
        </button>
      </div>
    </div>
  );
};

export default CashoutOptions;
