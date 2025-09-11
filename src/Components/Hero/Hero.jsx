import React from 'react'
import './Hero.css'

import hero1 from '../../assets/unsplash_IH7wPsjwomc.png'
import hero2 from '../../assets/unsplash_YqFz7UMm8qE.png'

const hero = () => {
  return (
      <section className="interior">
      {/* Left Side */}
      <div className="interior-left">
        <p className="interior-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <h1 className="interior-title">
          Interior <br /> Design
        </h1>
      </div>

      {/* Center Image */}
      <div className="interior-center">
        <img
          src={hero1}
          alt="Interior"
          className="interior-main-img"
        />
      </div>

      {/* Right Side */}
      <div className="interior-right">
        <p className="interior-small">Our Recent Work</p>
        <h2 className="interior-subtitle">
          We Will Make These Unique <br />
          Tastes Of Yours A Design Reality!
        </h2>
        <button className="interior-btn">VIEW PROJECT</button>
        <img
          src={hero2}
          alt="Interior Work"
          className="interior-side-img"
        />
      </div>
    </section>
  );
}

export default hero
