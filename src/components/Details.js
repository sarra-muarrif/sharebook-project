import React from "react";
// import {withRout} from "react-router"
class Details extends React.Component {
  render() {
    const bookId = this.props.bookid;
    const book = this.props.books.find(book => book.id.includes(bookId))
    console.log(this.props.bookid,"bookid detealis1")
    console.log(book, "bookid detealis2")
    return (
      <section className="detail">
        <div className="container">
          <div className="book-preview">
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              className="main-photo"
              alt={book.volumeInfo.title}
            />
            <a href="/" className="add-to-cart">
              Add To Cart
            </a>
            <p>Saler : Sara</p>
          </div>
          <div className="book-detail">
            <div className="book-overview">
              <h2 className="book-title">
                {book.volumeInfo.title}
              </h2>
              <div>
                <h2 className="book-price">
                  {book.id}
                  <span>
                    <i className="fas fa-star" style={{ color: "yellow" }} />
                    <i className="fas fa-star" style={{ color: "yellow" }} />
                    <i className="fas fa-star" style={{ color: "yellow" }} />
                    <i className="fas fa-star" style={{ color: "yellow" }} />
                    <i className="fas fa-star" style={{ color: "yellow" }} />
                  </span>
                </h2>
              </div>
            </div>
            <div className="book-description">
              <p>{book.volumeInfo.description}</p>
            </div>
            <div className="book-info">
              <p id="book-Author">
                Author: {book.volumeInfo.authors}
              </p>
              <p id="book-PubYear">
                Pub. Year: {book.volumeInfo.publishedDate}
              </p>
              <p id="book-Pages">
                Pages: {book.volumeInfo.pageCount}
              </p>
            </div>
          </div>
        </div>
        <div className="other-options">
          <h3>other options</h3>
        </div>
      </section>
    );
  }
}

export default Details;
