import React from "react";
import axios from "axios";

function ExportButton({ functionInput, range }) {
  const handleExport = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/export-csv",
        {
          functionExpr: functionInput,
          start: range.start,
          end: range.end,
          step: range.step,
        },
        { responseType: "blob" }
      );

      // Create a downloadable link
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "function-data.csv");
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error("Error exporting CSV:", err);
    }
  };

  return <button onClick={handleExport}>Export CSV</button>;
}

export default ExportButton;