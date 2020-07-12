import React, { useState } from "react";

const AddToCartButton = (props) => {
  return (
    <button className="add-to-cart" onClick={props.onClick}>
      Add To Cart
    </button>
  );
};
export default AddToCartButton;
