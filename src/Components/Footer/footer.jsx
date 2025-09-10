import React from 'react'
import './footer.css'

function footer() {
  return (
     <footer class="footer">
    <div class="footer-container">

    
      <div class="footer-left">
        <h2>Metro Wall Street</h2>
        <p>Crafting bold interiors and precision-engineered structures. From bespoke staircases to full-scale fabrication, we bring your vision to life — with quality, creativity, and craftsmanship at the core.</p>
        <span class="copyright">Copyright © 2025 Metro Wall Street</span>
      </div>

     
      <div class="footer-right">
        <h3>Sign Up Our News Latter</h3>
        <p>Stay inspired. Get the latest on interior trends, fabrication innovation, and exclusive project updates.</p>
        <div class="newsletter">
          <input type="email" placeholder="Enter Your Email Address"/>
          <button>→</button>
        </div>
        
        <div class="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Our Services</a></li>
          </ul>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div class="social-icons">
          <a href="#">FB</a>
          <a href="#">TW</a>
          <a href="#">IN</a>
        </div>
      </div>

    </div>
  </footer>
  )
}

export default footer
