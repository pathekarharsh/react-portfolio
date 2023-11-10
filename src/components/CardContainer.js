import React from "react";
import { FaMoneyBillAlt, FaBed, FaTrain, FaCalendar } from "react-icons/fa";
import "./CardContainer.css"; // Import your CSS file

const CardContainer = () => {
  const cards = [
    {
      icon: <FaMoneyBillAlt size={50} style={{ color: "#fff" }} />,
      heading: "Money",
      description: "11,000 Rs",
    },
    {
      icon: <FaBed size={50} style={{ color: "#fff" }} />,
      heading: "Dorms",
      description: "Dorms",
    },
    {
      icon: <FaTrain size={50} style={{ color: "#fff" }} />,
      heading: "Train",
      description: "SL + AC",
    },
    {
      icon: <FaCalendar size={50} style={{ color: "#fff" }} />,
      heading: "Calendar",
      description: "8 D 7 N",
    },
  ];

  return (
      <div className='last_one'>
          <div className='a'>
      <a href="https://forms.gle/R5U9ufLthGJmKdGSA" className="btn">
        REGISTER
              </a>
              </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <span className="icon">{card.icon}</span>
            <h3>{card.heading}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
