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

const Home = () => {
  const [expression, setExpression] = useState("");
  const [plotData, setPlotData] = useState(null);

  const handlePlot = async () => {
    if (!expression) return;

    try {
      const res = await axios.post("http://localhost:5000/api/plot", {
        expression,
      });
      setPlotData(res.data);
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

      {/* Chart with reduced size */}
      {plotData && (
        <div className="max-w-xl mx-auto"> {/* ✅ Restrict container width */}
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
            options={{
              responsive: true,
              maintainAspectRatio: false, // ✅ Needed for custom height
            }}
            height={300}  // ✅ smaller height
            width={500}   // ✅ smaller width
          />
        </div>
      )}
    </div>
  );
};

export default Home;