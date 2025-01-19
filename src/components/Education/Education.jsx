import React, { useContext } from "react";
import "./Education.css"; // Import CSS file
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import { themeContext } from "../../Context";
const Education = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="Edu">
      <h1 className="Edu_title">Education</h1>
      <p className="Edu_description">The Journey where I come from</p>
      <div className="Edu_sec">
        <div className="Edu_card">
          <FaGraduationCap className="icon" />
          <h2 className="Edu_degree" style={{ color: darkMode ? "white" : "" }}>BE CSE</h2>
          <p className="Edu_institution" style={{ color: darkMode ? "white" : "" }}>Kongu Engineering College</p>
          <p className="Edu_score" >CGPA: 8.34*</p>
        </div>
        <div className="Edu_card">
          <FaSchool className="icon" />
          <h2 className="Edu_degree" style={{ color: darkMode ? "white" : "" }}>HSC</h2>
          <p className="Edu_institution" style={{ color: darkMode ? "white" : "" }}>Velavan Matric Hr Sec School</p>
          <p className="Edu_score">92.5%</p>
        </div>
        <div className="Edu_card">
          <FaSchool className="icon" />
          <h2 className="Edu_degree" style={{ color: darkMode ? "white" : "" }}>SSLC</h2>
          <p className="Edu_institution" style={{ color: darkMode ? "white" : "" }}>Velavan Matric Hr Sec School</p>
          <p className="Edu_score">87%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
