import React from "react";

function Testimonials() {
  const reviews = [
    // Example reviews - replace with actual review data
    { username: "User1", rating: 5, comment: "Amazing experience!" },
    { username: "User2", rating: 4, comment: "Great food, cozy atmosphere." },
    // Add more reviews here
  ];

  return (
    <div
      id="testimonials"
      style={{ background: "#f2f2f2", padding: "20px", textAlign: "center" }}>
      <h2>Customer Testimonials</h2>
      <div>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #ddd",
            }}>
            <p>
              <strong>{review.username}</strong> -{" "}
              {Array(review.rating).fill("⭐").join("")}
            </p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
