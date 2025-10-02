import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function HomePage() {
  const [data, setData] = useState({ x: [], y: [] });

  useEffect(() => {
    // Example: f(x) = x^2 - 4x + 3
    const xVals = [];
    const yVals = [];
    for (let x = -5; x <= 5; x += 0.5) {
      xVals.push(x);
      yVals.push(x * x + 6 * x + 9);
    }
    setData({ x: xVals, y: yVals });
  }, []);

  return (
    <div className="page-content">
      <h1 style={{ color: "#0056d2" }}>📈 Function Plotter</h1>
      <p>This is the graph of <b>f(x) = x² + 6x + 9</b></p>

      <Plot
        data={[
          {
            x: data.x,
            y: data.y,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
          },
        ]}
        layout={{
          width: 900,
          height: 500,
          title: "Graph of f(x) = x² + 6x + 9",
          xaxis: { title: "x" },
          yaxis: { title: "f(x)" },
          plot_bgcolor: "#f8f9fa",
          paper_bgcolor: "#ffffff",
        }}
      />
    </div>
  );
}

export default HomePage;