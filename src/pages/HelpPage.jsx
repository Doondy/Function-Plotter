import React from "react";

function HelpPage() {
  return (
    <div className="page-content">
      <h1 style={{ color: "#0056d2" }}>❓ Help / Tutorial</h1>
      <p>Follow these steps to use the Function Plotter App:</p>
      <ul style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
        <li>Go to <b>Custom Plot</b> to enter your function.</li>
        <li>Click <b>Plot</b> to see the graph.</li>
        <li>Check <b>My Graphs</b> to view saved functions.</li>
      </ul>
    </div>
  );
}

export default HelpPage;