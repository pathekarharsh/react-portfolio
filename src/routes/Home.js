import React from "react";
import Navbar from "../components/Navbar";
import Heroimage from "../components/Heroimage";
import Footer from "../components/Footer";
import AboutCenter from "../components/AboutCenter";
import PlacesExp from "../components/PlacesExp";
import CardContainer from "../components/CardContainer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimage />
      <AboutCenter />
      <PlacesExp />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default Home;
