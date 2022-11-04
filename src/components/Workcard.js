import "./Workcard.css";
import React from "react";
/*import { NavLink } from "react-router-dom";
import todo from "../assets/todo.png";*/

const Workcard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgURL} alt="TodoProjectImage" />
      <h2 className="card-title">{props.title}</h2>
      <div className="card-detail">
        <p>{props.desc}</p>
        <div className="card-buttons">
          <a href={props.view} className="btn">
            WEBSITE
          </a>
          <a href={props.source} className="btn">
            SOURCE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
