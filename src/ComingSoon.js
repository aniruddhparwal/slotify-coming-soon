import React from "react";
import "./ComingSoon.css";
import logo from "./assets/slotify-full.png";
// import instagram from "./assets/instagram.png";
// import email from "./assets/email1.png";
// import linkedin from "./assets/linkedin.png";
// import footer from "./assets/Untitled.png";

const ComingSoon = () => {
  return (
    <div className="content">
    {/* <div className="coming-soon-container">
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
    </div> */}
    <header>
        <div class="container">
            <nav class="navbar navbar-dark bg-transparenet">
                <a class="navbar-brand" href="#">
                  <img src={logo} alt="Logo" className="logo"/>
                </a>
                <span class="navbar-text d-none d-sm-inline-block">connect@slotify.live</span>
            </nav>
        </div>
    </header>
    <main class="my-auto">
        <div class="container1">
            <h1 class="page-title">We're coming soon</h1>
            <p>Smart Booking: Say goodbye to hassles with our intelligent booking system.
                Personalized Recommendations: Tailored suggestions based on your preferences.</p>
            <p>Stay connected</p>
            <nav class="footer-social-links">
    
                <a href="https://www.linkedin.com/company/slotify-live" class="social-link" target="_blank">
                  <i class="mdi mdi-linkedin"></i></a>

                <a href="https://www.instagram.com/slotify.live/" class="social-link" target="_blank">
                  <i class="mdi mdi-instagram"></i></a>

                <a href="https://twitter.com/slotify_live" class="social-link" target="_blank">
                  <i class="mdi mdi-twitter"></i></a>

                <a href="mailto:connect@slotify.live" class="social-link" target="_blank">
                  <i class="mdi mdi-email"></i></a>
            </nav>
        </div>
    </main>
    </div>
  );
};

export default ComingSoon;
