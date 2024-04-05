import React from "react";
import logo from "../images/Logo.svg";

function NavigationBar() {
  return (
    <nav>
      {/* Placeholder Logo */}
      <div>
        <img src={logo} alt="logo" />
      </div>

      {/* Navigation Links */}
      <div>
        <a href="#hero" style={{ marginRight: "10px" }}>
          Home
        </a>
        <a href="#about" style={{ marginRight: "10px" }}>
          About
        </a>
        <a href="#menu" style={{ marginRight: "10px" }}>
          Menu
        </a>
        <a href="#reservations" style={{ marginRight: "10px" }}>
          Reservations
        </a>
        <a href="#order-online" style={{ marginRight: "10px" }}>
          Order Online
        </a>
        <a href="#login">Login</a>
      </div>
    </nav>
  );
}

export default NavigationBar;
