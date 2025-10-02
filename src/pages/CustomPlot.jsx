import React, { useState } from "react";
import Plot from "react-plotly.js";

function CustomPlot() {
  const [expression, setExpression] = useState("x*x");
  const [data, setData] = useState({ x: [], y: [] });

  const handlePlot = () => {
    const xVals = [];
    const yVals = [];
    for (let x = -10; x <= 10; x += 0.5) {
      xVals.push(x);
      try {
        // eslint-disable-next-line no-eval
        yVals.push(eval(expression.replace(/x/g, x)));
      } catch {
        yVals.push(null);
      }
    }
    setData({ x: xVals, y: yVals });
  };

  return (
    <div className="page-content">
      <h1 style={{ color: "#0056d2" }}>📝 Custom Function Plot</h1>
      <input type="text" value={expression} onChange={(e) => setExpression(e.target.value)} style={{ width: "300px", padding: "5px" }} />
      <button onClick={handlePlot} style={{ marginLeft: "10px", padding: "5px 10px" }}>Plot</button>

      <Plot
        data={[{ x: data.x, y: data.y, type: "scatter", mode: "lines+markers", marker: { color: "green" } }]}
        layout={{ width: 900, height: 500, title: `Graph of ${expression}`, xaxis: { title: "x" }, yaxis: { title: "y" } }}
      />
    </div>
  );
}

export default CustomPlot;