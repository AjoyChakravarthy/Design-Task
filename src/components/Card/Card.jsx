import React from "react";
import "./Card.css";

function Card({ image, description }) {
   return (
      <div className="card">
         <img
            src={image}
            alt="Fortnite Poster"
         />
         <p>{description}</p>
      </div>
   );
}

export default Card;
