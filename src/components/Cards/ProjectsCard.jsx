import React,{ useContext} from "react";
import "./ProjectsCard.css";
import { themeContext } from "../../Context";
const ProjectsCard = ({ project }) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="project-card" style={{ color: darkMode ? "white" : "" }}>
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        {/* <p className="project-date">{project.date}</p> */}
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
