import React from "react";
import Details from "../components/Details.js";
import BookGridDetails from "../components/BookGridDetails.js";
import Header from "../components/Header.js";

class DetailsPage extends React.Component {
  render() {
    const bookId = this.props.match.params.id;
    return (
      <>
        <Header />
        <Details books={this.props.books} bookid={bookId} />
        <BookGridDetails limit={4} books={this.props.books} />
      </>
    );
  }
}

export default DetailsPage;


