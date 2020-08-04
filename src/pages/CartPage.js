import React from "react";

class CartPage extends React.Component {
  render() {
    const { handleDelete, orderBook } = this.props;
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
                      <h2>Price : {book.finalPrice}$</h2>
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
              <div className="total-price">
                <h2>Total : {total}$</h2>
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
