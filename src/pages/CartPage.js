import React from "react";
import BookCheckout from "../components/BookCheckout";

class CartPage extends React.Component {
  render() {
    return (
      <>
        <section className="shopping-cart">
          <div className="container">
            <h2 className="shopping">Shopping Cart</h2>
            <BookCheckout />
            <BookCheckout />
            <div className="total-order">
              <div className="total-price">
                <h2 className="last-price">Total : 19 $</h2>
                <h2 className="last-qty">QTY : 2</h2>
              </div>
              <button className="proceed-to-checkout">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default CartPage;
