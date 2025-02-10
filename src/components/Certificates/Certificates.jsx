import React from "react";
import "./Certificates.css";
import MongoDBCertificate from "../../img/Certificates.png"

const Certificates = () => {
  return (
    <section id="certifications">
      <div className="certificates-container">
        <h2 className="certificates-title">My Certifications</h2>
        <p className="certificates-subtitle">
          Proudly certified as a MongoDB Developer. 
          Here's my official certification Badge!
        </p>

        {/* Certificate Display */}
        <div className="certificate-display">
          <img src={MongoDBCertificate} alt="MongoDB Developer Certificate" className="certificate-image" />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
