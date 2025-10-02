import React from "react";

function FunctionInput({ functionInput, setFunctionInput, onPlot }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>Function f(x): </label>
      <input
        type="text"
        value={functionInput}
        onChange={(e) => setFunctionInput(e.target.value)}
        placeholder="Enter function, e.g., sin(x)"
        style={{ width: "200px", marginRight: "10px" }}
      />
      <button onClick={onPlot}>Plot</button>
    </div>
  );
}

export default FunctionInput;