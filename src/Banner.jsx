import React from "react";
import "./Banner.css";
import bannerImage from "./img/banner-image.png";
import bannerMobileImage from "./img/banner-image-mobile.png"

function Banner() {
  return (
    <section className="banner">
      <div className="banner-info">
        <div className="banner-info-header-top">DECENTRALIZED</div>
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
          This presents a tremendous opportunity for entrepreneurs and startups to launch decentralized applications (dApps for short). 
          Because web3 and the blockchain is still in its infant stages, it would be smart to begin taking action now. 
          Ok, so where do I come in? I am an experienced developer with specialized knowledge in blockchain development (specifically with NFTs). 
          My goal is to help build clients a successful dApp. I will hold your hand from the in-and-outs of smart contract creation 
          all the way to the front end UI design. If you have any inquiries, feel free to contact me!
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
