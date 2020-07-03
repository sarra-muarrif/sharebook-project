import React,{ useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  return (
    <span>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input type="radio" name="rating" style={{ display: "none" }} value={ratingValue} onClick={()=> setRating(ratingValue)}/>
            <i className="fas fa-star"  style={{ color : ratingValue <= rating ? "#FFF34D" :"#9C9A94" }} />
          </label>
        );
      })}
    </span>
  );
};

export default StarRating;
