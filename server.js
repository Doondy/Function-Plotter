import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// If you want MongoDB later:
// import mongoose from "mongoose";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post("/api/plot", (req, res) => {
  const { expression } = req.body;

  // Example: evaluate simple function f(x) = x^2 - 4x + 3
  const xValues = [];
  const yValues = [];

  for (let x = -5; x <= 5; x += 0.5) {
    xValues.push(x);
    yValues.push(x * x + 6 * x + 9); // replace with real parser later
  }

  res.json({
    expression,
    x: xValues,
    y: yValues,
  });
});

let graphHistory = [];

app.post("/api/history", (req, res) => {
  const { expression, x, y } = req.body;
  const entry = { expression, x, y, date: new Date().toISOString() };
  graphHistory.push(entry);
  res.json({ message: "Graph saved!", entry });
});

app.get("/api/history", (req, res) => {
  res.json(graphHistory);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
