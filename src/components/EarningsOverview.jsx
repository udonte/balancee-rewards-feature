// src/components/EarningsOverview.jsx

import React from "react";
import { CiViewList } from "react-icons/ci";

const EarningsOverview = ({ totalCashback, currentBalance }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6 animate-fade-in-up transition-transform transform hover:scale-105 border border-gray-50">
      <div className="flex items-center gap-2 text-xl font-bold text-primary mb-4">
        <h2 className="">Earnings Overview</h2>
        <CiViewList size={18} />
      </div>

      <div className="flex justify-between items-center">
        <div className="">
          <p>Total Cashback Earned:</p>
          <p className="text-black font-semibold">{`$${totalCashback.toFixed(
            2
          )}`}</p>
        </div>
        <div className="">
          <p>Current Balance:</p>
          <p className="text-black font-semibold">{`$${currentBalance.toFixed(
            2
          )}`}</p>
        </div>
      </div>
    </div>
  );
};

export default EarningsOverview;
