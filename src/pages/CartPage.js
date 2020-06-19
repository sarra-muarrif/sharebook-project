import React from "react";

import BookCheckout from "../components/BookCheckout";

class CartPage extends React.Component {
  render() {
    return (
      <>
        <h2>Shopping Cart</h2>
        <BookCheckout />
        <BookCheckout />
        <div className="total-order">
          <div className="total-price">
            <h2>Total : 19 $</h2>
            <h2>QTY : 2</h2>
          </div>
          <button>Proceed To Checkout</button>
        </div>
      </>
    );
  }
}

export default CartPage;
