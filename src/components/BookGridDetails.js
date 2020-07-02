import React from "react";
import BookDetails from "./BookDetails";

class BookGridDetails extends React.Component {
  render() {
    const books = this.props.books.slice(0, this.props.limit);
    const bookList = books.map((book) => {
      return (
        <BookDetails
          key={book.id}
          title={book.volumeInfo.title}
          image={book.volumeInfo.imageLinks.thumbnail}
        />
      );
    });
    return (
      <section className="book-details">
        <div className="container">
        <div className="other-options-style">
          <ul className="books-grid">{bookList}</ul>
        </div>
        </div>
      </section>
    );
  }
}

export default BookGridDetails;
