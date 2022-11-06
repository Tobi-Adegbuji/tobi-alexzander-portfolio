import React from "react";
import "./Banner.css";
import bannerImage from "./img/banner-image.png";
import bannerMobileImage from "./img/banner-image-mobile.png"
import song_1 from "./img/the-tourist.mp3"

function Banner() {
  return (
    <section className="banner">
      <div className="banner-info">
        <div className="banner-info-header-top">UX/UI DESIGN</div>
        <h1 className="banner-info-header-bottom">TECHNOLOGIST</h1>
        <div className="banner-info-line"></div>
        <p>
          A creative individual with knowledge in decentalzed application development;
          working with a range of blockchain technologies to provide an excellent user
          experience.{" "}
        </p>
        <div className="banner-info-btn">
          <h3>CONTACT ME</h3>
        </div>
        <div className="banner-info-about">
          <h2>How Can I Help You</h2>
          <h1>GROW?</h1>
          <p>
          Web3 is the next era of the internet. It enables user trust by utilizing the blockchain 
          to create decentralized platforms. No longer will power (or your data) remain with centralized companies such as Facebook.
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
      {/* <audio autoPlay="autoplay" controls>
        <source src={require("./img/the-tourist.mp3")}/>
      </audio> */}
    </section>
  );
}

export default Banner;
