import React, { Component } from "react";
import HeroSeller from "../components/HeroSeller";
import BookSeller from "../components/BookSeller";

class SellerPage extends Component {
  render() {
    return (
      <>
        <HeroSeller />
        <BookSeller />
      </>
    );
  }
}
export default SellerPage;
