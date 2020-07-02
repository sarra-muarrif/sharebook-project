import React from "react";
import Header from "../components/Header";
class CartPage extends React.Component {
  render() {
    const books = this.props.books;
    return (
      <>
        <Header />
        <section className="section-cart">
          <div className="container">
            <div className="cart-title">
              <h2>Shopping Cart</h2>
            </div>
            <div className="book-checkout">
              <div className="book-review">
                <img
                  src={books[1].volumeInfo.imageLinks.thumbnail}
                  alt="book cover"
                />
                <div className="book-desc">
                  <h2>{books[1].volumeInfo.title}</h2>
                  <h2>Sold By : Sara</h2>
                </div>
              </div>
              <div className="cart-btns">
                <button className="delete-btn">Delete</button>
                <a href="/books">
                  <button className="back-btn">Back To Shopping</button>
                </a>
              </div>
            </div>
            <div className="total-order">
              <div className="total-price">
                <h2>Total : {books[1].id}</h2>
                <h2>QTY : 2</h2>
              </div>
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default CartPage;
