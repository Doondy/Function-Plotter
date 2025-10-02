import React from "react";

function AboutPage() {
  return (
    <div className="page-content">
      <h1 style={{ color: "#0056d2" }}>ℹ️ About This Project</h1>
      <p>
        This <b>Function Plotter App</b> is built using React and Plotly.js.  
        It helps visualize mathematical functions interactively.
      </p>
      <ul style={{ textAlign: "left", maxWidth: "600px", margin: "20px auto" }}>
        <li>Enter or view functions in terms of <code>x</code></li>
        <li>Visualize 2D plots of functions</li>
        <li>Export data for analysis</li>
      </ul>
    </div>
  );
}

export default AboutPage;