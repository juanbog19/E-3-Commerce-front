import { FaStar } from "react-icons/fa";

export const RatingInput = ({ rating, handleInputChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1); 

  return (
    <div>
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Calificar
      <div className="flex">
        {stars.map((star) => (
          <FaStar
            key={star}
            className={`text-yellow-500 ${
              star <= rating ? "fill-current" : "fill-none"
            } w-6 h-6 border-solid border border-black cursor-pointer transition-opacity duration-300 ${
              star <= rating ? "opacity-100" : "opacity-50"
            }`}
            onMouseEnter={() =>
              handleInputChange({
                target: { name: "rating", value: star },
              })
            }
            onMouseLeave={() =>
              handleInputChange({
                target: { name: "rating", value: rating },
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