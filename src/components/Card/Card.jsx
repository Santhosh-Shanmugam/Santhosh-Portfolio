import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;