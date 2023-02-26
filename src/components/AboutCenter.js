import "./AboutCenter.css";

import React from "react";
import { Link } from "react-router-dom";
import react1 from "../assets/react1.png";
import react21 from "../assets/react21.png";

const AboutCenter = () => {
  return (
    <div className="main">
      <div className="leftabout">
        <h1>Who Am I?</h1>
        <p>
          I am a skilled website developer with expertise in both front-end and 
          back-end development. My passion lies in creating, intuitive websites
          that offer a seamless user experience.
        </p>
        <div className="contact-btn">
          <Link to="/contact" className="btn">
            CONTACT
          </Link>
        </div>
      </div>
      <div className="rightabout">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} alt="about1image" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={react21} alt="about2image" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCenter;
