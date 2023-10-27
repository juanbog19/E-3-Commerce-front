import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, marca, modelo, img, price, imageLink, flipImageLink, flipOnHover }) => {
  const cardStyle = flipOnHover ? "card flip" : "card";

  return (
    <div className={cardStyle}>
      <div className="card-front">
        <img src={img} alt={marca} />
        <h2>{marca}</h2>
        <p>Modelo: iphone 11{modelo}</p>
        <p>Price: $399 USD{price}</p>
        <Link to={`/detail/${id}`}>
          <button>Details</button>
        </Link>
      </div>
      <div className="card-back">
        <img src={flipImageLink} alt="Image" />
      </div>
    </div>
  );
};

export default Card;

