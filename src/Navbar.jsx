import React from 'react';
import './Navbar.css'; 
import NavButton from './NavButton';
import homeIcon from './img/home-icon.png';
import contactIcon from './img/contact-icon.png';
import projectsIcon from './img/projects-icon.png';
import resumeIcon from './img/resume-icon.png';
import workIcon from './img/work-icon.png';
import linkedinIcon from './img/social-media-icons/linkedin.png'
import githubIcon from './img/social-media-icons/github.png'
import instagramIcon from './img/social-media-icons/instagram.png'
import pinterestIcon from './img/social-media-icons/pinterest.png'




function Navbar() {
  return (
  <nav className='navbar'>
      <div className="navbutton-container">
      <NavButton icon={homeIcon}/>
      <NavButton icon={projectsIcon}/>
      <NavButton icon={workIcon}/>
      <NavButton icon={resumeIcon}/>
      <NavButton icon={contactIcon}/>
      </div>
      <div className="social-media-container">
          <img src={linkedinIcon} alt="linkedin" />
          <img src={githubIcon} alt="linkedin" />
          <img src={instagramIcon} alt="linkedin" />
          <img src={pinterestIcon} alt="linkedin" />
      </div>
  </nav>
  );
}

export default Navbar;
