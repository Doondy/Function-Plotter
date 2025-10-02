import React from "react";

function Controls({ range, setRange }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>Start: </label>
      <input
        type="number"
        value={range.start}
        onChange={(e) => setRange({ ...range, start: parseFloat(e.target.value) })}
        style={{ width: "80px", marginRight: "10px" }}
      />

      <label>End: </label>
      <input
        type="number"
        value={range.end}
        onChange={(e) => setRange({ ...range, end: parseFloat(e.target.value) })}
        style={{ width: "80px", marginRight: "10px" }}
      />

      <label>Step: </label>
      <input
        type="number"
        value={range.step}
        step="0.1"
        onChange={(e) => setRange({ ...range, step: parseFloat(e.target.value) })}
        style={{ width: "80px", marginRight: "10px" }}
      />
    </div>
  );
}

export default Controls;