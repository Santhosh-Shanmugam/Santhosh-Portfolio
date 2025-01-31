import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" , height: "250px"}} />
      <div className="f-content">
        <span className="footer-tag">All rights reserved || Made by Santhosh</span>
      </div>
    </div>
  );
};

export default Footer;
