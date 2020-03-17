import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='header sticky'>
      <ul className="main-nav">
        <li><img className="logo" src='logo.png'/></li>
        <div className='push'>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
        </div>
      </ul>
    </div>
  )
}


export default Navbar;