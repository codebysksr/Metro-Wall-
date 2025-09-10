import React from 'react'
import './work.css'

import photo1 from '../../assets/unsplash_4_jQL4JCS98.png'

const work = () => {
return (
   <section class="program">
  <div class="program-left">
    <h2 class="program-title">Our Design & Fabrication Solution</h2>

    <div class="program-item">
      <p class="program-text">
        We design interiors that blend form, function, and feeling. 
        Each space is tailored to your lifestyle, taste, and goals — from spatial planning to the finishing details that define your personality.
      </p>
      <span class="program-number">/01</span>
    </div>

    <div class="program-item">
      <span class="program-number">02/</span>
      <p class="program-text">
      Our fabrication team brings custom design elements to life — from one-of-a-kind furniture pieces to architectural details — all crafted with precision and high-quality materials to elevate your space.
      </p>
    </div>
  </div>


  <div class="program-right">
     <img src={photo1} alt="Interior Design Room" class="program-img"/> 
  </div>
</section>
  )
}

export default work
