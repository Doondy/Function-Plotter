import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <h2>📊 Graphing App</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/custom-plot">Custom Plot</Link>
        <Link to="/history">My Graphs</Link>
        <Link to="/help">Help</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
