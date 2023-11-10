import "./AboutCenter.css";

import React from "react";
import poster from "../assets/poster.png"

const AboutCenter = () => {
  return (
    <div className="main">
      <div className="leftabout">
        <h1>Uncover South</h1>
        <p>
          Join our week-long expedition across South India,
          a captivating voyage through the colorful streets of Coimbatore, the serene shores of Varkala,
          the tranquil vibes of Kollam, the cultural tapestry of Trivandrum, and the spiritual allure of
          Rameswaram. Immerse yourself in a rich exploration of Tamil Nadu and Kerala,
          where every city offers a unique, enchanting tale, making this journey an unforgettable sojourn
          through the heart of South India.
        </p>
        <div className="contact-btn">
          <a href="mailto:paryatakin@gmail.com" className="btn">
            CONTACT
          </a>
        </div>
      </div>
      <div className="rightabout">
        <div className="img-container">
            <img src={poster} alt="poster" className="img" />
        </div>
      </div>
    </div>
  );
};

export default AboutCenter;
