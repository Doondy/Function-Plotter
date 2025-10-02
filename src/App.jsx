import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CustomPlot from "./pages/CustomPlot";
import HistoryPage from "./pages/HistoryPage";
import HelpPage from "./pages/HelpPage";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/custom-plot" element={<CustomPlot />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </div>
    </Router>
  );
}