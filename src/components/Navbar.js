import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const handleColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", handleColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul class={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="dropdown" onClick={handleClick}>
        {click ? ( //if else for dropdown and cross button with ternary operator
          <ImCross size={20} style={{ color: "white" }} />
        ) : (
          <AiOutlineBars size={25} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
