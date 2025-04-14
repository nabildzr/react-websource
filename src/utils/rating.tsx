import { Star, StarHalf } from "@phosphor-icons/react";
import React from "react";

interface RatingProps {
  rating: number; // 4.2 ato 5.* 3.*
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <Star
            key={`full-${index}`}
            weight="fill"
            className="text-yellow-500"
          />
        ))}

      {hasHalfStar && <StarHalf weight="fill" className="text-yellow-500" />}

      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <Star
            weight="regular"
            key={`empty-${index}`}
            className="text-gray-300"
          />
        ))}
    </div>
  );
};

export default Rating;
