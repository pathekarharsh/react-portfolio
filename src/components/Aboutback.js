import "./Aboutback.css";
import React, { Component } from "react";

class Aboutback extends Component {
  render() {
    return (
      <div className="about-img">
        <div className="content-head">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Aboutback;
