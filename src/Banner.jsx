import React from "react";
import "./Banner.css";
import bannerImage from "./img/banner-image.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-info">
        <div className="banner-info-header-top">CREATIVE</div>
        <h1 className="banner-info-header-bottom">TECHNOLOGIST</h1>
        <div className="banner-info-line"></div>
        <p>
          A creative individual with knowledge in application development;
          working with a range of technologies to provide an excellent user
          experience.{" "}
        </p>
        <div className="banner-info-btn">
          <h3>CONTACT ME</h3>
        </div>
        <div className="banner-info-about">
          <h2>How Can I Help You</h2>
          <h1>GROW?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta corrupti saepe cum illum qui temporibus, maiores incidunt, impedit in, quos at ex inventore! Incidunt nesciunt unde quis? Voluptatem doloribus modi dolor debitis amet fugiat animi quos explicabo perferendis! Officia maiores fugiat voluptatum sequi, animi quia deleniti mollitia maxime quos cumque, voluptates repudiandae. Perferendis magni inventore, commodi deserunt natus recusandae.</p>
        </div>
      </div>
      <div className="banner-infographic">
        <img src={bannerImage} alt="" />
        {/* <div className="banner-stats">
          <h3 className='banner-stats-name'>TOBI ALEXANDR</h3>
          <h4>YEARS OF EXPERIENCE</h4>
          <h4>3+</h4>
          <h4>CLIENT SATISFACTION</h4>
          <h4 className=''>99%</h4>
      </div> */}
      </div>
    </section>
  );
}

export default Banner;
