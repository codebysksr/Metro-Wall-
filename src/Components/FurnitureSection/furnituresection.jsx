import React from "react";
import "./furnitureSection.css";
import photo1 from '../../assets/WhatsApp Image 2025-09-08 at 2.46.33 PM.jpeg'
import photo2 from '../../assets/WhatsApp Image 2025-09-08 at 2.46.35 PM.jpeg'

const FurnitureSection = () => {
  return (
    <div className="furniture-section">
      {/* Left Image */}
      <div className="image-container">
        <img
          src={photo1}
          alt="Dining Room"
        />
      </div>

      {/* Text Content */}
      <div className="text-container">
        <h1>Where Function<br />  Meets Form — Fabrication <br /> That Elevates Design Comfortable.</h1>
        <p>
          From sleek floating staircases to modern structural elements, we specialize in custom fabrication that transforms both residential and commercial spaces. Every piece is engineered for strength, safety, and style — handcrafted to fit your vision and your space.
        </p>
      </div>

      {/* Right Image */}
      <div className="image-container">
        <img
          src={photo2}
          alt="Modern Furniture"
        />
        <p>
         Our architectural metalwork and façade solutions merge durability with bold design. Whether it’s custom railing systems, exterior detailing, or structural fabrication, we deliver precision-built pieces that stand the test of time — and turn heads.
        </p>
      </div>
    </div>
  );
};

export default FurnitureSection;
