import React from "react";

function AboutPage() {
  return (
    <div className="page-content" style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "#0056d2" }}>ℹ️ About This Project</h1>

      <p>
        The <b>Function Plotter Web Application</b> is an interactive educational tool
        designed to help students visualize mathematical functions and equations.
      </p>

      <h2 style={{ color: "#0056d2" }}>Features:</h2>
      <ul style={{ textAlign: "left", maxWidth: "600px", margin: "20px auto" }}>
        <li>Plot mathematical functions like y = x², y = sin(x), and custom expressions.</li>
        <li>Interactive graphs with zoom, pan, and tooltips using Plotly.js.</li>
        <li>Responsive design compatible with desktop, tablet, and mobile screens.</li>
        <li>Backend integration with Node.js and Express to process function data.</li>
        <li>Optional MongoDB database to save user graph history and track progress.</li>
        <li>Additional educational features such as multiplication quizzes and leaderboards.</li>
      </ul>

      <h2 style={{ color: "#0056d2" }}>Technologies Used:</h2>
      <ul style={{ textAlign: "left", maxWidth: "600px", margin: "20px auto" }}>
        <li>Frontend: ReactJS, HTML5, CSS3</li>
        <li>Graphing: Plotly.js / Chart.js</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MongoDB (optional)</li>
        <li>Data Exchange: JSON, REST APIs</li>
      </ul>

      <h2 style={{ color: "#0056d2" }}>Purpose:</h2>
      <p>
        This project helps students understand the behavior of mathematical functions
        visually and track their learning progress.
        It demonstrates the integration of frontend, backend, and database in a
        full-stack educational web application.
      </p>
    </div>
  );
}

export default AboutPage;