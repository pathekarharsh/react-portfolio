import React from "react";
import "./Heroimage.css";
import IntroImg from "../assets/mainback.jpg";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="home-background" />
      </div>
      <div className="content">
        <p>HI, I'M HARSH.</p>
        <h1>REACT DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <a
            href="https://drive.google.com/file/d/1VaeZL5kTiWJaYHMXH9GnrzNQGxqSYk_n/view?usp=sharing"
            className="btn-light"
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
