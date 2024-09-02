import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RewardsSummary from "./pages/RewardsSummary";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<RewardsSummary />} />
      </Routes>
    </Router>
  );
};

export default App;
