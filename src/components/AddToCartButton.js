import React, { useState } from "react";

const AddToCartButton = (props) => {
  const [count] = useState(0);

  return (
    <>
      <button
        className="add-to-cart"
        onClick={() => props.catchItem({ ...props.item, count })}
      >
        Add To Cart
      </button>
    </>
  );
};
export default AddToCartButton;
