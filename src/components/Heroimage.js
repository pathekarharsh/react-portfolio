
import React, { useState, useEffect } from 'react';
import "./Heroimage.css";


const Heroimage = () => {
  const images = [
    "https://images.unsplash.com/photo-1555609971-da67ecf8c6c5?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621788546583-7ecc391343f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602094395895-fb8070114e38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614090699960-b4c81be49f3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   
    "https://images.unsplash.com/photo-1567948928918-e7eb15b32a57?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const intervalTime = 3000; // Interval time in milliseconds

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(slider);
  }, [index, images.length, intervalTime]);
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="intro-img"
          src={images[index]}
          alt="home-background"
          
        />
      </div>
      <div className="content">
        <p>
          South India <i>Trail</i>
        </p>
        <h1>UNCOVER KERALA</h1>
        <p className="h5">02 Jan - 09 Jan 2024</p>
        <div>
          <a
            href="https://drive.google.com/file/d/1svS40LYGE2EHAjFn5wi11M4tqQdyIVBT/view?usp=sharing"
            className="btn"
          >
            ITINERARY
          </a>
          <a href="https://forms.gle/R5U9ufLthGJmKdGSA" className="btn-light">
            REGISTER
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
