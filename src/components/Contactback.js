import React, { Component } from "react";
import "./Contactback.css";

class Contactback extends Component {
  render() {
    return (
      <div className="contact-img">
        <div className="contact-head">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Contactback;
