import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const RatingInput = ({ rating, onChange }) => {
  const [hoverRating, setHoverRating] = useState(null);

  const handleRatingChange = (newRating) => {
    if (typeof onChange === "function") {
      onChange(newRating);
    }
  };

  return (
    <div>
      <label className="flex items-center block text-gray-700 text-lg font-bold mb-2">
        Califícanos:
        <div className="flex items-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`text-yellow-500 ${
                (hoverRating || rating) >= star ? "text-yellow-600 animate-bounce" : "text-yellow-400"
              } w-8 h-8 cursor-pointer transition-opacity duration-300 ${
                (hoverRating || rating) >= star ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => handleRatingChange(star)}
              onMouseEnter={() => setHoverRating(star)}
            />
          ))}
        </div>
      </label>
    </div>
  );
};