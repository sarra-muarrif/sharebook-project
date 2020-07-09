import React, { useState } from "react";

const AddToCartButton = (props) => {
  const [count, SetCount] = useState(0);

  return (
    <>
      <button
        className="add-to-cart"
        onClick={() => props.catchItem({ ...props.item, count })}
      >
        Add To Cart
        <span className="input-count-details">
          <input
            className="input-count"
            type="number"
            name="count"
            placeholder="0"
            onChange={(e) => SetCount(e.target.value)}
          />
        </span>
      </button>
      {/* exmple  */}
      {/* <button onClick={(e) => SetCount(count + 1)}>
        Click me
      </button> */}
    </>
  );
};
export default AddToCartButton;
