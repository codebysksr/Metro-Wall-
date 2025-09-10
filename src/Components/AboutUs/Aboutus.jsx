import React from 'react'
import './Aboutus.css'
import hero3 from '../../assets/unsplash_5MG8cQbw-T8.png'


const Aboutus = () => {
  return (
     <section class="about">
 
  <div class="about-left">
    <img src={hero3} alt="Exterior and Interior Design" class="about-img"/>
  </div>

  <div class="about-right">
    <p class="section-label">WHO WE ARE</p>
    <h2 class="about-title">Interior & Exterior<br/> Design That Lives and Breathes Your Vision</h2>
    <p class="about-text">
        From thoughtfully curated interiors to striking exteriors, we design every space to align with your lifestyle, purpose, and aesthetic. Every detail — inside and out — is tailored to elevate your environment.
    </p>
    <a href="#" class="btn-dark">Read More</a>
  </div>
</section>
  )
}

export default Aboutus
