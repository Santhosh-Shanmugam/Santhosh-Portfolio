import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "../Cards/ProjectsCard.jsx";
import { projects } from "../data/Projects.js";

const Projects = () => {
  const [toggle, setToggle] = useState("All");

  return (
    <section id="projects" className="projects-container">
      <div className="projects-wrapper">
        <h1 className="projects-title">Projects</h1>

        {/* Toggle Button Group */}
        <div className="toggle-group">
          {["All", "Full-Stack", "Front-end"].map((category) => (
            <button
              key={category}
              className={`toggle-button ${toggle === category ? "active" : ""}`}
              onClick={() => setToggle(category)}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Display */}
        <div className="card-container">
          {projects
            .filter((item) => toggle === "All" || item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
