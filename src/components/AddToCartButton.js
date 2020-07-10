import React from "react";

const AddToCartButton = (props) => {
  return (
    <>
      <button
        className="add-to-cart"
        onClick={() => props.catchItem({ ...props.item })}
      >
        Add To Cart
      </button>
    </>
  );
};
export default AddToCartButton;
