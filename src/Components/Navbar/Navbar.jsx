import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-highlight">M</span>etro Wall Street
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Support</a></li>
      </ul>

      {/* Button */}
      <button className="signup-btn">Sign Up</button>
    </nav>
  );
};

export default Navbar;
