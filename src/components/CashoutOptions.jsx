import React, { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { IoCashOutline } from "react-icons/io5";

const CashoutOptions = ({ currentBalance, onCashout }) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [cashoutAmount, setCashoutAmount] = useState("");
  const [promoCode, setPromoCode] = useState("");

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
    setCashoutAmount("");
    setPromoCode("");
  };

  const handleCashout = () => {
    if (!cashoutAmount) {
      alert("Please enter a valid amount.");
      return;
    }

    if (cashoutAmount > currentBalance) {
      alert("You cannot cash out more than your current balance.");
      return;
    }

    if (selectedMethod === "promo") {
      setPromoCode(
        `PROMO-${Math.random().toString(36).substr(2, 8).toUpperCase()}`
      );
    }

    onCashout(selectedMethod, cashoutAmount, promoCode);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 animate-fade-in-up transition-transform transform hover:scale-105 border border-gray-50">
      <div className="flex items-center gap-2 text-xl   text-primary font-bold  ">
        <h2 className="">Cashout Options</h2>
        <IoCashOutline size={15} />
      </div>
      <p className="text-xs mb-8">Click any of the cashout options:</p>
      <div className="flex justify-start gap-2 mb-6">
        <button
          onClick={() => handleMethodChange("direct")}
          className={`flex items-center gap-2 font-medium py-2 px-4 rounded  transition-all duration-300 ${
            selectedMethod === "direct"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Direct Cashout
          {selectedMethod === "direct" && <BiCheckCircle />}
        </button>
        <button
          onClick={() => handleMethodChange("promo")}
          className={` flex items-center gap-2 font-medium py-2 px-4 rounded  transition-all duration-300 ${
            selectedMethod === "promo"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Promo Code
          {selectedMethod === "promo" && <BiCheckCircle />}
        </button>
      </div>
      {selectedMethod && (
        <div className="mb-6">
          <label className="block mb-2">Enter Amount:</label>
          <input
            type="number"
            placeholder="Cashout Amount"
            value={cashoutAmount}
            onChange={(e) => setCashoutAmount(e.target.value)}
            className="w-full border-2 text-[#222222] border-gray-200 outline-none bg-white placeholder:text-[#222222]/50 rounded-xl placeholder:text-sm text-sm placeholder:font-light dark:bg-deskit-black-100 px-2 py-2 "
          />
        </div>
      )}
      {selectedMethod === "promo" && promoCode && (
        <div className="mb-6">
          <label className="block mb-2">Your Promo Code:</label>
          <div className="p-2 border rounded-lg bg-gray-100 text-center">
            {promoCode}
          </div>
        </div>
      )}
      <button
        onClick={handleCashout}
        className="w-full py-2 mt-4 bg-primary text-white rounded-lg"
      >
        {selectedMethod === "promo" ? "Generate Promo Code" : "Cash Out"}
      </button>
    </div>
  );
};

export default CashoutOptions;
