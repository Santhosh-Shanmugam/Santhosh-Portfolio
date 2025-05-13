import React, { useContext, useEffect, useState } from "react";
import "./Intro.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import resume from "./resume.pdf"; // Adjust the path if needed
import {
  FaHome,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaLaptop,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";
import ProfileImage from "../../img/Profile.jpeg";

const Intro = () => {
  // Animation transition
  const transition = { duration: 2, type: "spring" };

  // Context for theme
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Mouse position for parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="intro-section" id="Intro">
      <div className="intro-container">
        {/* Left content area */}
        <div className="intro-content">
          <motion.div
            className="intro-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="greeting" style={{ color: darkMode ? "white" : "" }}>
              Hey! I Am
            </h3>
            <h1 className="name">
              Santhosh S{/* <span className="name-underline"></span> */}
            </h1>
            {/* <div className="title-container">
              <span className="title">Full Stack Developer</span>
              <span className="title-separator">|</span>
              <span className="title">UI/UX Designer</span>
            </div> */}
          </motion.div>

          <motion.p
            className="intro-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: darkMode ? "white" : "" }}
          >
            A passionate Full Stack Developer with expertise in both front-end
            and back-end technologies, delivering high-quality, user-centric web
            applications. Skilled in crafting responsive and visually appealing
            web designs, ensuring optimal user experiences, and writing
            efficient, scalable code.
          </motion.p>

          <motion.div
            className="action-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* <Link to="contact" smooth={true} spy={true} duration={800}> */}
            {/* <button className="primary-button">
                Hire me
                <span className="button-icon">→</span>
              </button> */}
            {/* </Link> */}
            <buttton>
            <a href={resume} download="Santhosh Resume.pdf" className="primary-button">
              Resume
              <span className="button-icon">→</span>
            </a>
            </buttton>
            <Link to="projects" smooth={true} spy={true} duration={800}>
              <button className="secondary-button">View Projects</button>
            </Link>
          </motion.div>
        </div>

        {/* Right visual area */}
        <div className="intro-visual">
          <div
            className="profile-frame"
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${
                mousePosition.y * 0.3
              }px)`,
            }}
          >
            <div
              className="profile-image"
              style={{
                backgroundImage: `url(${ProfileImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="profile-glow"
              style={{
                backgroundImage: `url(${ProfileImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(15px) brightness(1.2)",
              }}
            ></div>
          </div>

          <motion.div
            className="skill-badge badge-1"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              transform: `translate(${mousePosition.x * -0.4}px, ${
                mousePosition.y * -0.4
              }px)`,
            }}
          >
            <div className="badge-content">
              <div className="badge-icon frontend-icon"></div>
              <div className="badge-text">
                <span>Frontend</span>
                <span>Developer</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="skill-badge badge-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              transform: `translate(${mousePosition.x * 0.4}px, ${
                mousePosition.y * 0.4
              }px)`,
            }}
          >
            <div className="badge-content">
              <div className="badge-icon design-icon"></div>
              <div className="badge-text">
                <span>UI/UX</span>
                <span>Designer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="navigation-dots">
        <Link
          to="Intro"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
        >
          <div className="nav-dot">
            <span className="dot-tooltip">Home</span>
          </div>
        </Link>
        <Link
          to="education"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
        >
          <div className="nav-dot">
            <span className="dot-tooltip">Education</span>
          </div>
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
        >
          <div className="nav-dot">
            <span className="dot-tooltip">Skills</span>
          </div>
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
        >
          <div className="nav-dot">
            <span className="dot-tooltip">Services</span>
          </div>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
        >
          <div className="nav-dot">
            <span className="dot-tooltip">Projects</span>
          </div>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
        >
          <div className="nav-dot">
            <span className="dot-tooltip">Contact</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
