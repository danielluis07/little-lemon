import React from "react";

function About() {
  return (
    <div id="about" style={{ padding: "20px", textAlign: "center" }}>
      <h2>About Us</h2>

      {/* Text Box Placeholder */}
      <div
        style={{
          border: "2px dashed #ccc",
          padding: "20px",
          margin: "20px 0",
          minHeight: "100px",
        }}>
        Amet duis tellus at congue donec vestibulum convallis sagittis sed
        quisque. Rutrum hendrerit sociosqu sed scelerisque aliquet suspendisse.
        Quam duis nec hendrerit senectus ante integer leo congue imperdiet
        aliquam.
      </div>

      {/* Image Placeholders */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div
          style={{
            width: "200px",
            height: "150px",
            border: "2px dashed #ccc",
          }}>
          Image 1
        </div>
        <div
          style={{
            width: "200px",
            height: "150px",
            border: "2px dashed #ccc",
          }}>
          Image 2
        </div>
        <div
          style={{
            width: "200px",
            height: "150px",
            border: "2px dashed #ccc",
          }}>
          Image 3
        </div>
      </div>
    </div>
  );
}

export default About;
