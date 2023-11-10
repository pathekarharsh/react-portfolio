import React from 'react';
import './PlacesExp.css'

import Image1 from "../assets/adiyogi.png";
import Image2 from "../assets/cliff.png";
import Image3 from "../assets/jatayucenterpost.png";
import Image4 from "../assets/kovalam.jpg";
import Image5 from "../assets/pamban.jpg";
import Image6 from "../assets/qln.png";
import Image7 from "../assets/vak.png";
import Image8 from "../assets/vishnu-prasad-2X8qR2dQwFE-unsplash.jpg";

const PlacesExp = () => {
    const images = [
        Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
    
      return (
        <div className="explore-places">
          <h1 className='exp-head'>Places to Explore</h1>
          <div className="image-grid">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Place ${index + 1}`} />
            ))}
          </div>
        </div>
      );
    };

export default PlacesExp