import React, { useEffect, useState } from "react";
import axios from "axios";

function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/history")
      .then(res => setHistory(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="page-content">
      <h1 style={{ color: "#0056d2" }}>📜 My Graph History</h1>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item.expression} — {new Date(item.createdAt).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryPage;