import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HomePage = () => {
  const [expression, setExpression] = useState("");
  const [plotData, setPlotData] = useState(null);

  const handlePlot = async () => {
    if (!expression) return;

    try {
      const res = await axios.post("http://localhost:5000/api/plot", {
        expression,
      });
      setPlotData(res.data); // ✅ result already saved to DB
    } catch (err) {
      console.error(err);
      alert("Error plotting function");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📈 Function Plotter</h1>

      {/* Input & Button */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="Enter function (ex: x^2 - 3x + 2)"
          className="border p-2 w-80 rounded"
        />
        <button
          onClick={handlePlot}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Plot
        </button>
      </div>

      {/* Chart */}
      {plotData && (
        <div className="max-w-xl mx-auto mb-8">
          <Line
            data={{
              labels: plotData.x,
              datasets: [
                {
                  label: plotData.expression,
                  data: plotData.y,
                  borderColor: "blue",
                  borderWidth: 2,
                  pointRadius: 0,
                },
              ],
            }}
            options={{ responsive: true, maintainAspectRatio: false }}
            height={300}
            width={500}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;