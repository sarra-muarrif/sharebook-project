import React from "react";

import BookGrid from "./BookGrid.js";

class NewBooks extends React.Component {
  render() {
    return (
      <BookGrid
        title="new books"
        gridtype=" New-books"
        classname="new-books-title"
        limit={4}
        books={this.props.books}
      />
       
    );
  }
}
export default NewBooks;
