import React from "react";
import './SliderCard.css'; 

function SliderCard({ cardImage }) {
  return (
    <div className="slider-card">
      <img className="slider-card-image" src={cardImage} alt="card" />
    </div>
  );
}

export default SliderCard;
