import React from "react";
import Details from "../components/Details.js";
import BookGridDetails from "../components/BookGridDetails.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class DetailsPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Details books={this.props.books} />
        <BookGridDetails limit={4} books={this.props.books} />
        <Footer />
      </>
    );
  }
}

export default DetailsPage;
