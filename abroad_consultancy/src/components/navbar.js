import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";


const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth" 
  });
};

function NavBar() {
  

  return (
    <div className='main'>
      <div className="header-nav">
      
        <div className="head-container">

           <img
            src="logos/bpit.jpeg"
            alt="BPIT logo"
            style={{marginLeft: "20px", display: "inline-block", height: "40px", width: "100px" }}
          />
          <img
            src="logos/logo.jpeg"
            alt="logo"
            style={{marginLeft: "20px", display: "inline-block", height: "40px", width: "200px" }}
          />
        </div>

        <div className="navbar">
          <h3 onClick={scrollToTop}>
            <Link to="/" >Home</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/trending">Gallery</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/destinations">Our Destinations</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/resources">Resources</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/services">Our Services</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/contact">Contact us</Link>
          </h3>
      </div>
       </div>
      <div className='navbar2'>
        <Link to="/register">
        <button style={{ width: "auto" }} onClick={scrollToTop}>
          <p>Sign In</p>
        </button>
        
      </Link>
      <button id='vle'>
          <a href='https://tinyurl.com/2hvdjm9m' target='blank'>VLE For BPIT</a>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
