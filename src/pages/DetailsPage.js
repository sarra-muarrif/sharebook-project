import React from "react";
import Details from "../components/Details.js";
import BookGridDetails from "../components/BookGridDetails.js";
import Header from "../components/Header.js";

class DetailsPage extends React.Component {
  render() {
    const bookId = this.props.match.params.id;
    const book = this.props.books.find((book) => book.id.includes(bookId));
    //Filter Price
    const filterPrice =
      book &&
      (book.saleInfo.saleability === "NOT_FOR_SALE" ||
      book.saleInfo.saleability === "FREE"
        ? 20
        : book.saleInfo.retailPrice.amount);
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
          price={filterPrice}
        />
      </>
    );
  }
}

export default DetailsPage;
