import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aboutback from "../components/Aboutback";
import AboutCenter from "../components/AboutCenter";

const About = () => {
  return (
    <div>
      <Navbar />
      <Aboutback heading="ABOUT ME" text="I'M A WEBSITE DEVELOPER." />
      <AboutCenter />
      <Footer />
    </div>
  );
};

export default About;
