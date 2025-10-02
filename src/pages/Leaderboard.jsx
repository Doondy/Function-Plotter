import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

function Leaderboard() {
  const [scores, setScores] = useState([
    { user: "Alice", score: 12 },
    { user: "Bob", score: 10 },
    { user: "Charlie", score: 9 },
  ]);

  return (
    <div className="page-content">
      <h1 style={{ color: "#0056d2" }}>🏆 Leaderboard</h1>
      <ol>
        {scores.sort((a, b) => b.score - a.score).map((item, idx) => (
          <li key={idx}>{item.user} — {item.score}</li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;
