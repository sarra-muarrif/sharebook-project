import React from "react";
import BookDetails from "./BookDetails";

class BookGridDetails extends React.Component {
  render() {
    const books = this.props.books.slice(0, this.props.limit);
    const bookList = books.map((book) => {
      return (
        <BookDetails
          key={book.id}
          // price={book.saleInfo.listPrice.amount}
          // link={book.volumeInfo.previewLink}
          title={book.volumeInfo.title}
          image={book.volumeInfo.imageLinks.thumbnail}
        />
      );
    });
    return (
      <section className="book-details">
        <div className="container">
          <ul className="books-grid">{bookList}</ul>
        </div>
      </section>
    );
  }
}

export default BookGridDetails;
