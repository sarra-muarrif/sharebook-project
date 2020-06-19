import React from "react";
import BookDetails from "./BookDetails";

class BookGridDetails extends React.Component {
  render() {
    const books = this.props.books.slice(0, this.props.limit);
    const bookList = books.map((book) => {
      return (
        <BookDetails key={book.id} price={book.price} image={book.image} />
      );
    });
    return (
      <>
        <ul className="book-grid-details">{bookList}</ul>
        <ul className="book-grid-details">{bookList}</ul>
      </>
    );
  }
}

export default BookGridDetails;
