import React from "react";

class AddToCartButton extends React.Component {
  render() {
    return (
      <button className="add-to-cart" onClick={this.props.onClick}>
        Add To Cart
      </button>
    );
  }
}
export default AddToCartButton;
