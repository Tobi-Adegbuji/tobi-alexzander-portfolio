import React from 'react';
import './NavButton.css'; 

function NavButton({icon}) {
  return (
  <div className='navbutton'>
      <img src={icon} alt="home-icon" />
  </div>
  );
}

export default NavButton;
