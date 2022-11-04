import "./Footer.css";
import React from "react";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-part">
          <div className="email">
            <AiOutlineMail
              size={25}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>pathekarharsh@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right-part">
          <h3>Socials</h3>
          <div className="social">
            <a href="https://github.com/pathekarharsh">
              <AiOutlineGithub
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/harsh-pathekar-42b7971b8/">
              <AiFillLinkedin
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://twitter.com/iGniTe_04">
              <AiOutlineTwitter
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

            <a href="https://www.instagram.com/ignite.3d/">
              <AiOutlineInstagram
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
