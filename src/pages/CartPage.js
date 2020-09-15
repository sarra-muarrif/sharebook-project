import React from "react";
import { NavLink } from "react-router-dom";

class CartPage extends React.Component {
  render() {
    const { handleDelete, orderBook, isSignedIn } = this.props;
    const total = orderBook.reduce((a, c) => a + c.finalPrice, 0);

    return (
      <>
        <section className="section-cart">
          <div className="container">
            <div className="cart-title">
              <h2>Shopping Cart</h2>
            </div>
            {orderBook.map((book) => {
              return (
                <div className="book-checkout" key={book.id}>
                  <div className="book-review">
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt="book cover"
                    />
                    <div className="book-desc">
                      <h2>{book.volumeInfo.title}</h2>
                      <h2>{book.finalPrice}$</h2>
                    </div>
                  </div>
                  <div className="cart-btns">
                    <button
                      className="delete-btn"
                      onClick={(item) => handleDelete(book.id)}
                    >
                      Delete
                    </button>
                    <a href="/books">
                      <button className="back-btn">Back To Shopping</button>
                    </a>
                  </div>
                </div>
              );
            })}
            <div className="total-order">
              {orderBook.length === 0 ? (
                <div className="total-price">
                  <h2 className="animate__animated animate__zoomInDown">
                    Cart is empty
                  </h2>
                </div>
              ) : (
                <>
                  <div className="total-price">
                    <h2>Total : {total}$</h2>
                    <h2>QTY : {orderBook.length}</h2>
                  </div>
                  <button>Proceed To Checkout</button>
                </>
              )}
              {isSignedIn === true ? (
                <div className="total-price">
                  <h2>Your final Bill is : {total.toLocaleString()}$</h2>
                </div>
              ) : (
                <div className="total-price">
                  <NavLink exact to="./sign-in" className="sign-in-now">
                    You Aren't A User Please signIn First
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default CartPage;
