import React, { useContext } from "react";
import { themeContext } from "../../Context"; // Import theme context
import "./About.css";
import ProfileImage from "../../img/Profile.jpeg"; // Replace with your actual image

const About = () => {
  const { state } = useContext(themeContext); // Get theme state
  const darkMode = state.darkMode;

  return (
    <section id="about">
      <div className={`about-container ${darkMode ? "white" : ""}`}>
        
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={ProfileImage} alt="Santhosh's Profile" className="profile-img" />
        </div>

        {/* Right Side - Description */}
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hi, I'm <strong>Santhosh</strong>, a passionate Computer Science Engineering student  
            with a deep interest in Full-stack development, Problem-solving, and Innovative technology.  
            I love exploring new technologies and building real-world applications that solve practical problems.
          </p>

          <p className="about-description">
            My expertise includes MERN Stack Development, ReactJS, MongoDB, and API Integration.  
            I also have hands-on experience in backend technologies like Node.js & Express.js and database management.
          </p>

          {/* Stats Section */}
          <div className="about-stats">
            <div className="stat">
              <h3 className="start">3+</h3>
              <p>Full-Stack Projects</p>
            </div>
            <div className="stat">
              <h3 className="start">200+</h3>
              <p>LeetCode Problems Solved</p>
            </div>
            <div className="stat">
              <h3 className="start">2+</h3>
              <p>Achievements & Certifications</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
