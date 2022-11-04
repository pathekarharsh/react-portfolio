import "./Workcard.css";
import Workcard from "./Workcard";
import ProjectCardData from "./ProjectCardData";
import React from "react";
/*import { NavLink } from "react-router-dom";
import todo from "../assets/todo.png";*/

const WorkProject = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((value, index) => {
          return (
            <Workcard
              key={index}
              imgURL={value.imgURL}
              title={value.title}
              desc={value.desc}
              view={value.view}
              source={value.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProject;
