import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, image, brand, model, price }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div>
        <img src={image} alt={brand} className="w-full h-auto" />
      </div>

      <div className="mt-2">
        <h2 className="text-xl font-semibold">{brand}</h2>
      </div>

      <div className="mt-2">
        <p>Model: {model}</p>
        <p>Price: {price}</p>
      </div>

      <Link to={`/detail/${id}`} className="mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Details
        </button>
      </Link>
    </div>
  );
};

export default Card;
