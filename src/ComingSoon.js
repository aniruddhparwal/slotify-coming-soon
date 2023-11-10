import React from "react";
import "./ComingSoon.css";
import logo from "./assets/slotify-full-1.png";
import instagram from "./assets/instagram.png";
import email from "./assets/email1.png";
import linkedin from "./assets/linkedin.png";
import footer from "./assets/Untitled.png";

const ComingSoon = () => {
  return (
    <>
    <div className="coming-soon-container">
      <img src={logo} alt="Logo" className="logo"/>
      <p className="message">Coming Soon...</p>
    </div>
    <div className="footer">
      <img class="footerImage" src={footer}/>
      <div className="contactIcon">
        <a href="https://www.linkedin.com/company/slotify-live">
         <img src={linkedin} alt="LinkedIn" className="mediaIcon"/>
        </a>
        <a href="mailto:connect@slotify.live">
         <img src={email} alt="Email" className="mediaIcon"/>
        </a>
        <a href="https://www.instagram.com/slotify.live/">
          <img src={instagram} alt="Instagram" className="mediaIcon"/>
        </a>
      </div>
    </div>
    </>
  );
};

export default ComingSoon;
