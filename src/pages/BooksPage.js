import React from "react";
import Searchbook from "../components/SearchBook.js";
import BookGridDetails from "../components/BookGridDetails.js";

class BooksPage extends React.Component {
  render() {
    return (
      <>
        <Searchbook />
        <BookGridDetails
          title="other opthions"
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
