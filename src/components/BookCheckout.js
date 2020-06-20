import React, { Component } from "react";
import img1 from "../img/img-1.png";
class BookCheckout extends Component {
  render() {
    return (
      <>
        <div className="book-checkout">
          <div className="book-review">
            <img src={img1} alt="book cover" />
            <div className="book-desc">
              <h2 className="price-checkout">19 $</h2>
              <h2 className="seller-name">Sold By : Sara</h2>
            </div>
          </div>
          <div className="cart-btns">
            <button id="delete-card" className="delete-btn">
              Delete
            </button>
            <button className="return-to-shop">
              <a href="/books">Back To Shopping</a>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default BookCheckout;
