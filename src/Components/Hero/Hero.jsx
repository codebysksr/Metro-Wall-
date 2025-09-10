import React from 'react'
import './Hero.css'

import hero1 from '../../assets/unsplash_IH7wPsjwomc.png'
import hero2 from '../../assets/unsplash_YqFz7UMm8qE.png'

const hero = () => {
  return (
        <section class="hero">
    
    <div class="hero-left">
      <p class="intro-text">
       "We transform spaces into reflections of your lifestyle
         — blending functionality with refined aesthetics. Whether it’s a cozy home or a bold commercial space, we craft interiors that feel as good as they look."
      </p>
      <h1 class="hero-title">Interi<span>or</span> <br/> Design</h1>
    </div>

   
    <div class="hero-center">
      <img src={hero1} alt="Interior Design Room" class="hero-img"/>
    </div>

   
    <div class="hero-right">
      <p class="work-label">Our Recent Work</p>
      <h2 class="work-heading">
        Your Vision. Our Craft. Let’s Bring It to Life.
      </h2>
      <a href="#" class="btn-outline">View Project</a>
      <img src={hero2} alt="Recent Project" class="work-img"/>
    </div>
  </section>
  )
}

export default hero
