import React from "react";
import "./ComingSoon.css";
import logo from "./assets/slotify-full.png";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <img src={logo} alt="Logo" className="logo" />
      <p className="message">Coming Soon</p>
    </div>
  );
};

export default ComingSoon;
