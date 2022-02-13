import React from "react";
import './SliderCard.css'; 

function SliderCard({ projectImage, experienceImage }) {
  return (
    <div className="slider-card">
    {
      projectImage 
      ? 
      <img 
      className="slider-card-project-image" 
      src={require(`./img/${projectImage}`)} 
      alt="card" 
      />
      :
      <img 
      className="slider-card-experience-image" 
      src={require(`./img/${experienceImage}`)} 
      alt="card" 
      />

    }
    </div>
  );
}

export default SliderCard;
