import React from "react";
import bruchetta from "../images/bruchetta.svg";
import greekSalad from "../images/greek salad.jpg";
import lemonDessert from "../images/lemon dessert.jpg";

function Highlights() {
  const specials = [
    {
      title: "Greek Salad",
      description:
        "Litora quisque eleifend pellentesque feugiat hac cubilia. Malesuada viverra sapien curabitur ultricies interdum sit laoreet praesent condimentum.",
      price: "$20",
      imageUrl: bruchetta,
    },
    {
      title: "Bruchetta",
      description:
        "Litora quisque eleifend pellentesque feugiat hac cubilia. Malesuada viverra sapien curabitur ultricies interdum sit laoreet praesent condimentum.",
      price: "$20",
      imageUrl: greekSalad,
    },
    {
      title: "Lemon Dessert",
      description:
        "Litora quisque eleifend pellentesque feugiat hac cubilia. Malesuada viverra sapien curabitur ultricies interdum sit laoreet praesent condimentum.",
      price: "$25",
      imageUrl: lemonDessert,
    },
    // Add more dishes here
  ];

  return (
    <div id="highlights">
      <h2>Weekly Specials</h2>
      <div style={{ display: "flex", overflowX: "auto", padding: "10px" }}>
        {specials.map((dish, index) => (
          <div
            key={index}
            style={{ marginRight: "20px", cursor: "pointer" }}
            onClick={() => (window.location.href = "/dish-details")}>
            <img
              src={dish.imageUrl}
              alt={dish.title}
              style={{ width: "100px", height: "100px" }}
            />
            <h3>{dish.title}</h3>
            <p>{dish.description}</p>
            <p>{dish.price}</p>
          </div>
        ))}
      </div>
      <button onClick={() => (window.location.href = "/order-online")}>
        Order Online
      </button>
    </div>
  );
}

export default Highlights;
