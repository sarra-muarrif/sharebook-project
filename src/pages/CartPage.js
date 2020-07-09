import React from "react";
import Header from "../components/Header";

class CartPage extends React.Component {
  render() {
    const books = this.props.orderBook;
    const { handleDelete, orderBook, price } = this.props;
    const total = orderBook.reduce((a, c) => a + price * c.count, 0);

    return (
      <>
        <Header orderBook={this.props.orderBook} />
        <section className="section-cart">
          <div className="container">
            <div className="cart-title">
              <h2>Shopping Cart</h2>
            </div>
            {books.map((book, idx) => {
              return (
                <div className="book-checkout" key={idx}>
                  <div className="book-review">
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt="book cover"
                    />
                    <div className="book-desc">
                      <h2>
                        {book.volumeInfo.title}
                        <span className="number-count-span">{book.count}</span>
                      </h2>
                      <h2>${price}</h2>
                    </div>
                  </div>
                  <div className="cart-btns">
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(book.id)}
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
              <div className="total-price">
                <h2>Total : {total}</h2>
                <h2>QTY : {orderBook.length}</h2>
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
