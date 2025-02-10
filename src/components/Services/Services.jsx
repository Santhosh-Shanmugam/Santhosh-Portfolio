import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  
  const transition = {
    duration: 3,
    type: "spring",
  };

  return (
    <section id="services">
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Services</span>
        <span>what I offer</span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "22rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Quality Work"}
            detail={"Agile development, bug-free code, testing, code review, optimizing performance"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Full Stack Development"}
            detail={"MERN,JavaScript,HTML,CSS"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "15rem" }}
          whileInView={{ left: "22rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Web Design and Ui/Ux"}
            detail={
              "Responsive Web Design and Figma"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
    </section>
  );
};

export default Services;
