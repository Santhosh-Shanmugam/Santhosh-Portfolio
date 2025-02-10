import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaHome, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* Left Section */}
      <div className="n-left">
        <div className="n-name">Portfolio</div>
        <Toggle />
      </div>

      {/* Right Section */}
      {/* <div className="n-right">
        <div className="n-list">
          <ul className="nav-menu">
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true} offset={-50} duration={500}>
                <div className="nav-circle">
                  <FaHome className="nav-icon" />
                </div>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={500}>
                <div className="nav-circle">
                  <FaBriefcase className="nav-icon" />
                </div>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500}>
                <div className="nav-circle">
                  <FaProjectDiagram className="nav-icon" />
                </div>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="certifications" spy={true} smooth={true} offset={-50} duration={500}>
                <div className="nav-circle">
                  <FaCertificate className="nav-icon" />
                </div>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                <div className="nav-circle">
                  <FaEnvelope className="nav-icon" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
