import React, { useContext } from "react";
import { themeContext } from "../../Context";

const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React Js", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "HTML", image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
      { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js", image: "https://nodejs.org/static/images/logo.svg" },
      { name: "Express Js", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
      { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "MySQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
      { name: "MongoDB", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "Docker", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
      { name: "Netlify", image: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" },
      { name: "VS Code", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
      { name: "Postman", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Figma", image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    ],
  },
];

const Skills = () => {
  const { state } = useContext(themeContext);
  const darkMode = state.darkMode;

  return (
    <section id="skills" style={{ color: darkMode ? "white" : "", padding: "50px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1100px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          
          <h1 style={{  color: darkMode ? "white" : "",fontSize: "42px", fontWeight: "600", marginTop: "20px", textAlign: "center" }}>
            Skills
          </h1>
          
          <p style={{ fontSize: "18px", textAlign: "center", maxWidth: "600px", color: "var(--orange)" }}>
            Here are some of my skills on which I have been working on for the past 1 years.
          </p>

          <div style={{ width: "100%", display: "flex", flexWrap: "wrap", marginTop: "30px", gap: "30px", justifyContent: "center" }}>
            {skills.map((skill, index) => (
              <div 
                key={index} 
                style={{ 
                  maxWidth: "500px", 
                  width: "100%", 
                  background: darkMode ? "#1e1e1e" : "#ffffff", 
                  border: `1px solid ${darkMode ? "#854CE6" : "#ccc"}`, 
                  boxShadow: darkMode ? "rgba(255, 255, 255, 0.1) 0px 4px 24px" : "rgba(23, 92, 230, 0.15) 0px 4px 24px", 
                  borderRadius: "16px", 
                  padding: "18px 36px", 
                  transition: "all 0.3s ease-in-out" 
                }}
              >
                <h2 style={{ fontSize: "28px", fontWeight: "600", textAlign: "center", color: darkMode ? "white" : "black", marginBottom: "20px" }}>
                  {skill.title}
                </h2>
                
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
                  {skill.skills.map((item, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        fontSize: "16px", 
                        fontWeight: "400", 
                        border: `1px solid ${darkMode ? "#ffffff" : "#000000"}`, 
                        backgroundColor: darkMode ? "#ffffff" : "#252525", 
                        color: darkMode ? "black" : "white", 
                        borderRadius: "12px", 
                        padding: "12px 16px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        gap: "8px", 
                        transition: "all 0.3s ease-in-out",
                        cursor: "pointer",
                      }}
                    >
                      <img src={item.image} alt={item.name} style={{ width: "24px", height: "24px" }} />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
