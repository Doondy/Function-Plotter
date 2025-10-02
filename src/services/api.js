import axios from "axios";

const API_BASE = "http://localhost:5000"; // backend server URL

// 🔹 Fetch function data (single variable f(x))
export const getFunctionData = async (functionExpr, start, end, step) => {
  try {
    const res = await axios.post(`${API_BASE}/plot-function`, {
      functionExpr,
      start,
      end,
      step,
    });
    return res.data; // { x: [], y: [] }
  } catch (err) {
    console.error("Error fetching function data:", err);
    throw err;
  }
};

// 🔹 Export function data as CSV
export const exportFunctionCSV = async (functionExpr, start, end, step) => {
  try {
    const res = await axios.post(
      `${API_BASE}/export-csv`,
      { functionExpr, start, end, step },
      { responseType: "blob" } // CSV comes as blob
    );
    return res.data; // raw CSV blob
  } catch (err) {
    console.error("Error exporting CSV:", err);
    throw err;
  }
};

// 🔹 Example placeholder for future APIs
// Get 3D surface data (f(x, y))
export const getSurfaceData = async (functionExpr, xRange, yRange, step) => {
  try {
    const res = await axios.post(`${API_BASE}/plot-surface`, {
      functionExpr,
      xRange,
      yRange,
      step,
    });
    return res.data; // { x: [...], y: [...], z: [...] }
  } catch (err) {
    console.error("Error fetching surface data:", err);
    throw err;
  }
};

// Get parametric equation data (x(t), y(t), z(t))
export const getParametricData = async (xExpr, yExpr, zExpr, tStart, tEnd, tStep) => {
  try {
    const res = await axios.post(`${API_BASE}/plot-parametric`, {
      xExpr,
      yExpr,
      zExpr,
      tStart,
      tEnd,
      tStep,
    });
    return res.data; // { x: [], y: [], z: [] }
  } catch (err) {
    console.error("Error fetching parametric data:", err);
    throw err;
  }
};