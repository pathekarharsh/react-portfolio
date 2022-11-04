import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactback from "../components/Contactback";
import Contactcenter from "../components/Contactcenter";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Contactback heading="CONTACT" text="Let's connect and create." />
      <Contactcenter />
      <Footer />
    </div>
  );
};

export default Contact;
