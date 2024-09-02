// src/components/CashbackHistory.jsx

import React from "react";
import { BsClockHistory } from "react-icons/bs";

const CashbackHistory = ({ transactions }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6 animate-fade-in-up transition-transform transform hover:scale-105 border border-gray-50">
      <div className="flex items-center gap-2 text-xl font-bold text-primary mb-4">
        <h2 className="">Cashback History</h2>
        <BsClockHistory size={15} />
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-black">
            <th className="pb-2">Date</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">Booking ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2">{transaction.date}</td>
              <td className="py-2">{`$${transaction.amount.toFixed(2)}`}</td>
              <td className="py-2">{transaction.bookingId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CashbackHistory;
