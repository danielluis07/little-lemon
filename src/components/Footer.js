import React from "react";
import logo from "../images/Logo.svg";

function Footer() {
  return (
    <footer
      style={{
        background: "#333",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}>
      {/* Logo Placeholder */}
      <div style={{ marginBottom: "20px" }}>
        <img src={logo} alt="logo" />
      </div>

      {/* Doormat Navigation */}
      <div style={{ marginBottom: "20px" }}>
        <a href="#home" style={{ margin: "0 10px" }}>
          Home
        </a>
        <a href="#about" style={{ margin: "0 10px" }}>
          About
        </a>
        <a href="#menu" style={{ margin: "0 10px" }}>
          Menu
        </a>
        <a href="#reservations" style={{ margin: "0 10px" }}>
          Reservations
        </a>
        <a href="#order-online" style={{ margin: "0 10px" }}>
          Order Online
        </a>
        <a href="#login" style={{ margin: "0 10px" }}>
          Login
        </a>
      </div>

      {/* Contact Details */}
      <div style={{ marginBottom: "20px" }}>
        <p>Contact us: (123) 456-7890</p>
        <p>Email: info@littlelemon.com</p>
      </div>

      {/* Social Media Links */}
      <div>
        <a href="#" style={{ margin: "0 10px" }}>
          Facebook
        </a>
        <a href="#" style={{ margin: "0 10px" }}>
          Instagram
        </a>
        <a href="#" style={{ margin: "0 10px" }}>
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
