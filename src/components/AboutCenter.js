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
          I'm Harsh from India a web developer. I'm a Front End Developer, but i
          know some back end topics also like NodeJS, ExpressJS and MongoDB.
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
