import React from 'react'
import './letschat.css'


import Image1 from '../../assets/unsplash_GNs831kqdoM.png'

const letschat = () => {
  return (
     <section class="work-section">
    <div class="work-text">
      <p>Let’s Work Together And We’ll Help You By Our Best Interior Design</p>
      <a href="#" class="btn">Let’s Chat</a>
    </div>
    <div class="work-image">
      <img src={Image1} alt="InteriorDesign"/>
    </div>
  </section>
  )
}

export default letschat
