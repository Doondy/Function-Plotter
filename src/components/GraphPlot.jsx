import React from "react";
import Plot from "react-plotly.js";

function GraphPlot({ data, functionInput }) {
  return (
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
        width: 700,
        height: 500,
        title: `Plot of f(x) = ${functionInput}`,
        xaxis: { title: "x" },
        yaxis: { title: "f(x)" },
      }}
    />
  );
}

export default GraphPlot;