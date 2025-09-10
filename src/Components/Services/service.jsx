import React from 'react'
import './services.css'

import Photo1 from '../../assets/unsplash_KSfe2Z4REEM.png'
import Photo2 from '../../assets/unsplash_TRCJ-87Yoh0.png'


const service = () => {
  return (
    <section class="spaces">
  <div class="spaces-left">
    <img src={Photo1} alt="Kitchen Design" class="spaces-img top-img"/>
    <img src={Photo2} alt="Living Room Design" class="spaces-img bottom-img"/>
  </div>

 
  <div class="spaces-right">
    <h2 class="spaces-title">Design Unique And <br/> Functional Spaces</h2>
    <p class="spaces-text">
     We believe great design is more than just beautiful — it must serve a purpose. Our interiors are crafted to reflect your personality while maximizing space, flow, and function in every corner.
    </p>
    <p class="spaces-text">
     From bold living spaces to minimalist kitchens, we blend modern aesthetics with practical layouts. Every detail is designed with intent — ensuring your space doesn’t just look amazing, but lives beautifully too.
    </p>
  </div>
</section>
  )
}

export default service
