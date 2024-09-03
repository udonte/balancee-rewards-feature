// src/pages/RewardsSummary.jsx

import React, { useState, useEffect } from "react";
import EarningsOverview from "../components/EarningsOverview";
import CashbackHistory from "../components/CashbackHistory";
import CashoutOptions from "../components/CashoutOptions";
import Modal from "../components/Modal";
import { mockEarnings, mockTransactions } from "../data/mock";

const RewardsSummary = () => {
  const [earnings, setEarnings] = useState({});
  const [currentBalance, setCurrentBalance] = useState(
    mockEarnings.currentBalance
  ); // Mock balance
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [cashoutSuccess, setCashoutSuccess] = useState(false);

  console.log(currentBalance);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setEarnings(mockEarnings);
        setTransactions(mockTransactions);
        setLoading(false);
      }, 1000); // Since, there's no API, I am only trying to simulate API delay here
    };
    fetchData();
  }, []);

  const handleCashout = (method, amount, promoCode) => {
    if (method === "direct") {
      // Handle direct cashout logic here
      console.log(`Direct cashout of $${amount} initiated.`);
    } else if (method === "promo") {
      // Handle promo code generation logic here
      console.log(`Promo code ${promoCode} generated for $${amount}.`);
    }
    setCurrentBalance(currentBalance - amount);
    setCashoutSuccess(true);
    setTimeout(() => setCashoutSuccess(false), 5000); // Display modal for 5 seconds
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div
      className="p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen  bg-gray-200 bg-center"
      style={{
        backgroundImage: `url("../assets/lmsbg.svg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-4xl mx-auto p-4">
        <p className="mb-8 font-bold text-xl text-primary md:text-center">
          Reward Summary
        </p>

        <EarningsOverview
          totalCashback={mockEarnings.totalCashback}
          currentBalance={currentBalance}
        />
        <CashbackHistory transactions={transactions} />
        <CashoutOptions
          currentBalance={currentBalance}
          onCashout={handleCashout}
        />

        {cashoutSuccess && <Modal message="Cashout Successful!" />}
      </div>
    </div>
  );
};

export default RewardsSummary;
