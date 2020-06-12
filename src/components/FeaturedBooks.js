import React from "react";

import BookGrid from "./BookGrid.js";

class FeaturedBooks extends React.Component {
  render() {
    return (
      <BookGrid
        title="featured books"
        gridtype="featured-books"
        classname="featured-books-title"
        limit={4}
        books={this.props.books}
      />
      
    );
  }
}

export default FeaturedBooks;
