import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaChartLine, FaCalculator, FaHistory, FaTrophy, FaQuestionCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#0056d2", padding: "12px" }}>
      <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, justifyContent: "center", gap: "20px" }}>
        
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
            <FaHome /> Home
          </Link>
        </li>

        <li>
          <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
            <FaInfoCircle /> About
          </Link>
        </li>

        <li>
          <Link to="/custom-plot" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
            <FaChartLine /> Custom Plot
          </Link>
        </li>


        <li>
          <Link to="/history" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
            <FaHistory /> History
          </Link>
        </li>
        

        <li>
          <Link to="/help" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
            <FaQuestionCircle /> Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
