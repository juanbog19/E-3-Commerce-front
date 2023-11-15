import { FaStar } from "react-icons/fa";

export const RatingInput = ({ rating, handleInputChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1); 

  return (
    <div>
    <label className="flex items-center block text-gray-700 text-lg font-bold mb-2">
      Califícanos: 
      <div className="flex items-center mt-2">
        {stars.map((star) => (
          <FaStar
            key={star}
            className={`text-yellow-500 ${
              star <= rating ? "text-yellow-600 animate-bounce" : "text-yellow-400"
            } w-8 h-8 cursor-pointer transition-opacity duration-300 ${
              star <= rating ? "opacity-100" : "opacity-50"
            }`}
            onMouseEnter={() =>
              handleInputChange({
                target: { name: "rating", value: star },
              })
            }
            onClick={() =>
              handleInputChange({
                target: { name: "rating", value: star },
              })
            }
          />
        ))}
      </div>
    </label>
  </div>
  

  );

}