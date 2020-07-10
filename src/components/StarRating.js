import React from "react";

const StarRating = ({ score, averageRating }) => {
  let newAverageRating = averageRating + 1;
  return (
    <span>
      {[...Array(score)].map((star, i) => {
        newAverageRating--;
        return (
          <label key={i}>
            <input type="radio" name="rating" style={{ display: "none" }} />
            <i
              className="fas fa-star"
              style={{
                color: `${newAverageRating > 0 ? "#FFF34D" : "#9C9A94"}`,
              }}
            />
          </label>
        );
      })}
    </span>
  );
};
export default StarRating;
