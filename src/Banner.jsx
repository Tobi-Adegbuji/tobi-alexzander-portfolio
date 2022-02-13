import React from "react";
import "./Banner.css";
import bannerImage from "./img/banner-image.png";
import bannerMobileImage from "./img/banner-image-mobile.png"

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            soluta corrupti saepe cum illum qui temporibus, maiores incidunt,
            impedit in, quos at ex inventore! Incidunt nesciunt unde quis?
            Voluptatem doloribus modi dolor debitis amet fugiat animi quos
            explicabo perferendis! Officia maiores fugiat voluptatum sequi,
            animi quia deleniti mollitia maxime quos cumque, voluptates
            repudiandae. Perferendis magni inventore, commodi deserunt natus
            recusandae.
          </p>
        </div>
      </div>
      <div className="banner-infographic">
        {/* <h5>TOBI ALEXZANDR</h5> */}
        <picture>
        <source media="(max-width: 1394px)" srcSet={bannerMobileImage}/>
        <img src={bannerImage} alt="" className="banner-img"/>        
        </picture>
      </div>
    </section>
  );
}

export default Banner;
