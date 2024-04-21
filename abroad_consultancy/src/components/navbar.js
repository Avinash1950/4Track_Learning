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
    <div>
      <div className="header-nav">
        <div className="head-container">
          {/* <h1 style={{ display: "inline-block" }}>
            <span style={{ color: "#0ceedf" }}></span>{" "}
            <span style={{ color: "#170234" }}>4Track</span>Learning{" "}
          </h1> */}
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
          
          <Link to="/register">
        <button style={{ width: "auto" }} onClick={scrollToTop}>
          <p>Sign In</p>
        </button>
        {/* <button style={{ width: "auto" }} onClick={scrollToTop}>
          Signup
        </button> */}
      </Link>
       
      </div>

      </div>
    </div>
  );
}

export default NavBar;
