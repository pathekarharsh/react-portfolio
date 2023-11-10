import "./Navbar.css";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
        <img src={Logo} alt="Logo" width={180} height={180} />
      </Link>
    </div>
  );
};

export default Navbar;
