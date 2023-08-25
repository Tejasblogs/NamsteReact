import React from 'react'

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img src='https://dribbble.com/shots/14607836-Restaurant-Logo-Desi'/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;