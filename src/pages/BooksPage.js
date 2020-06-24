import React from "react";
import Searchbook from "../components/SearchBook.js";
import BookGridDetails from "../components/BookGridDetails.js";
import Header from "../components/Header.js";

class BooksPage extends React.Component {
  render() {
    return (
      <>
        <Header />
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
