import React from "react";
import Book from "./Book.js";

class BookGrid extends React.Component {
  render() {
    const books = this.props.books.slice(0, this.props.limit);
    const bookList = books.map((book) => {
      return <Book key={book.id} image={book.image} />;
    });
    return (
      <section className={`section ${this.props.gridtype}`}>
        <div className="container">
          <h3 className={this.props.classname}>{this.props.title}</h3>
          <ul className="books-grid">{bookList}</ul>
        </div>
      </section>
    );
  }
}

export default BookGrid;
