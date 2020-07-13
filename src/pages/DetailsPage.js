import React from "react";
import Details from "../components/Details.js";
import BookGridDetails from "../components/BookGridDetails.js";
import Header from "../components/Header.js";

class DetailsPage extends React.Component {
  render() {
    const books = this.props.books;
    const bookId = this.props.match.params.id;
    const book = books.find((book) => book.id.includes(bookId));
    //Filter Price
    const filterPrice =
      book?.saleInfo?.saleability === "FOR_SALE"
        ? book?.saleInfo?.listPrice?.amount
        : 20;
    return (
      <>
        <Header orderBook={this.props.orderBook} />
        <Details
          book={book}
          catchItem={this.props.catchItem}
          filterPrice={filterPrice}
        />
        <BookGridDetails
          limit={4}
          books={this.props.books}
          catchItem={this.props.catchItem}
        />
      </>
    );
  }
}
export default DetailsPage;
