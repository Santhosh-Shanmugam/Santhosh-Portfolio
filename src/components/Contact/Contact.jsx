import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Contact.css";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="contact">
    <div className="contact-icons" style={{ color: darkMode ? "white" : "black" }}>
      <h2 className="contact-heading">Connect with Me</h2>
      <p className="contact-subheading">Find me on these platforms:</p>

      <div className="contact-cards-container">
        {/* GitHub */}
        <div 
          className="contact-card" 
          style={{ backgroundColor: darkMode ? "#1e1e1e" : "#ffffff" }}
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="contact-logo"
          />
          <a
            href="https://github.com/Santhosh-Shanmugam"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
        </div>

        {/* LeetCode */}
        <div 
          className="contact-card"
          style={{ backgroundColor: darkMode ? "#1e1e1e" : "#ffffff" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            className="contact-logo"
          />
          <a
            href="https://leetcode.com/Santhosh_S2005"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LeetCode
          </a>
        </div>

        {/* LinkedIn */}
        <div 
          className="contact-card"
          style={{ backgroundColor: darkMode ? "#1e1e1e" : "#ffffff" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="contact-logo"
          />
          <a
            href="https://www.linkedin.com/in/santhosh-s-167110254/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>

        {/* WhatsApp */}
        <div 
          className="contact-card"
          style={{ backgroundColor: darkMode ? "#1e1e1e" : "#ffffff" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="contact-logo"
          />
          <a
            href="https://wa.me/919345645016"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            WhatsApp
          </a>
        </div>

        {/* Gmail */}
        <div 
          className="contact-card"
          style={{ backgroundColor: darkMode ? "#1e1e1e" : "#ffffff" }}
          onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=santhoshs.22cse@kongu.edu", "_blank")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Gmail"
            className="contact-logo"
          />
          <span className="contact-link">Gmail</span>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
