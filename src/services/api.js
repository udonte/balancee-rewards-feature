import axios from "axios";

const API_BASE_URL = "https://api.balancee.app";

export const getEarnings = () => {
  return axios.get(`${API_BASE_URL}/rewards/earnings`);
};

export const getTransactionHistory = () => {
  return axios.get(`${API_BASE_URL}/rewards/transactions`);
};

export const cashOutRewards = (method) => {
  return axios.post(`${API_BASE_URL}/rewards/cashout`, { method });
};
