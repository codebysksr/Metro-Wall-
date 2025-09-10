import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">Metro Wall Street</div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </div>

        {/* Menu */}
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Gallery</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Services</a></li>
            <div className="button1">
            <li>
              <a id="btn1" href="#" className="btn">Contact Us</a>
            
            </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;