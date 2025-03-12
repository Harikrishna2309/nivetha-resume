import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header Section */}
      <header>
        <h1>Nivetha S</h1>
        <p>18/114, Kungumampalayam, Tiruppur-638702</p>
        <p>📞 6385669153 | ✉️ <a href="mailto:nivethasaminathan17@gmail.com">nivethasaminathan17@gmail.com</a></p>
        <p>
          🔗 <a href="https://github.com/nivetha70" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://www.linkedin.com/in/nivetha-s-a6022b261" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </header>

      {/* Objective Section */}
      <section>
        <h2>Objective</h2>
        <p>
          Organized and motivated employee eager to apply time management and organizational skills in various environments.
          Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills
          for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2>Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Java, JavaScript</li>
          <li><strong>Web Technologies:</strong> HTML5, CSS3</li>
          <li><strong>Frameworks:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MySQL</li>
          <li>REST API</li>
          <li>GitHub</li>
          <li>OOPs</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section>
        <h2>Projects</h2>
        <h3>Cost Analyzer</h3>
        <p>
          Developed a web application designed to manage and track user expenses, with features to store, retrieve, and
          download expense records as PDF files. Used **Node.js** with **Express.js** for server-side processing, while **HTML, CSS, and JavaScript**
          were used for a responsive frontend. MySQL was implemented as the database for secure and structured data storage.
        </p>
      </section>

      {/* Education Section */}
      <section>
        <h2>Education</h2>
        <p><strong>Sri Ramakrishna College of Arts and Science</strong> - BCA (Bachelor of Computer Applications) - 70%</p>
        <p><strong>RG Matric Higher Secondary School</strong> - HSC - 82%</p>
        <p><strong>RG Matric Higher Secondary School</strong> - SSLC - 95%</p>
      </section>

      {/* Certifications Section */}
      <section>
        <h2>Certifications</h2>
        <ul>
          <li><strong>SQL and Relational Databases</strong> (IBM) - Proficient in database design, querying, and management.</li>
          <li><strong>Java Programming</strong> (GreatLearning) - Strong foundation in OOP, software development, and application design.</li>
        </ul>
      </section>

      {/* Tools Section */}
      <section>
        <h2>Tools</h2>
        <ul>
          <li>Eclipse</li>
          <li>VS Code</li>
          <li>Postman</li>
          <li>Workbench</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
