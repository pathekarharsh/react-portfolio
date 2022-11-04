import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projectback from "../components/Projectback";
import WorkProject from "../components/WorkProject";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Projectback heading="PROJECTS" text="Some of my best projects." />
      <WorkProject />
      <Footer />
    </div>
  );
};

export default Project;
