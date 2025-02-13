import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaHome, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope, FaTools, FaPrescription, FaRProject, FaLaptop } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* Left Section */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }} className="into">Hey! I Am</span>
          <span className="into">Santhosh S</span>
          <span className="des" style={{ color: darkMode ? "white" : "", width: "330px" }}>
            A passionate Full Stack Developer with expertise in both front-end and back-end technologies, delivering high-quality, user-centric web applications. Skilled in crafting responsive and visually appealing web designs, ensuring optimal user experiences, and writing efficient, scalable code. Committed to producing top-notch solutions that meet both functional and aesthetic requirements.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/Santhosh-Shanmugam"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/santhosh-s-167110254/"><img src={LinkedIn} alt="" /></a>
        </div>
      </div>

      {/* Right Section with Floating Icons */}
      <div className="floating-icons">
        <Link to="Navbar" spy={true} smooth={true} duration={500}>
          <div className="floating-circle"><FaHome className="floating-icon" /></div>
        </Link>
        <Link to="education" spy={true} smooth={true} duration={500}>
          <div className="floating-circle"><FaBriefcase className="floating-icon" /></div>
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          <div className="floating-circle"><FaTools className="floating-icon" /></div>
        </Link>
        <Link to="services" spy={true} smooth={true} duration={500}>
          <div className="floating-circle"><FaProjectDiagram className="floating-icon" /></div>
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          <div className="floating-circle"><FaLaptop className="floating-icon" /></div>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <div className="floating-circle"><FaEnvelope className="floating-icon" /></div>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="i-right">
        <img src={Vector1} alt="" className="vec1"/>
        <img src={Vector2} alt="" className="vec2" />
        <img src={boy} alt="" className="me" />

        {/* Animations */}
        <motion.img initial={{ left: "-36%" }} whileInView={{ left: "-8%" }} transition={transition} src={glassesimoji} alt="" />

        <motion.div initial={{ top: "-4%", left: "74%" }} whileInView={{ left: "60%" }} transition={transition} className="floating-div">
          <FloatinDiv img={crown} text1="Full Stack" text2="Developer" />
        </motion.div>

        <motion.div initial={{ left: "9rem", top: "18rem" }} whileInView={{ left: "5rem" }} transition={transition} className="floating-div">
          <FloatinDiv img={thumbup} text1="Ui/Ux" text2="Designer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div className="blur" style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem" }}></div>
      </div>
    </div>
  );
};

export default Intro;
