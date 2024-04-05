import React from "react";
import mainImage from "../images/restauranfood.jpg";

function HeroSection() {
  return (
    <main id="hero">
      <div>
        {/* Content */}
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          served with a modern twist
        </p>

        {/* Book a Table Button */}
        <button onClick={() => (window.location.href = "/booking")}>
          Book a Table
        </button>
      </div>
      <div className="banner">
        <img src={mainImage} alt="banner" />
      </div>
    </main>
  );
}

export default HeroSection;
