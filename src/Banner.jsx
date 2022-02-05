import React from 'react';
import './Banner.css'; 
import bannerImage from './img/banner-image.png'

function Banner() {
  return (
  <section className='banner'>
      <div className="banner-info">
        <p>CREATIVE</p>
        <h1>TECHNOLOGIST</h1>
      </div>
      <div className="banner-infographic">     
        <img src={bannerImage} alt="" />
      </div>
  </section>
  );
}

export default Banner;
