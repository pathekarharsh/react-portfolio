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
        <div className="social">
        <a href="mailto:paryatakin@gmail.com">
              <AiOutlineMail
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/company/90696812/admin/feed/posts/">
              <AiFillLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://www.instagram.com/paryataksathi/">
              <AiOutlineInstagram
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
        </div>
        <p className='bottom'>2024  paryataksathi. All rights reserved.</p>
      </div>
      
      </div>
  );
};

export default Footer;
