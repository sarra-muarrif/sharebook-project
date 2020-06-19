import React from "react";
import Searchbook from "../components/SearchBook.js";
import BookGrid from "../components/BookGrid";

class BooksPage extends React.Component {
  render() {
    return (
      <>
        <Searchbook />
        <BookGrid
          title="featured books"
          gridtype="featured-books"
          classname="featured-books-title"
          limit={4}
          books={this.props.books}
        />
      </>
    );
  }
}

export default BooksPage;
