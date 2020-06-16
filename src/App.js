import React from "react";

import HomePage from "./pages/HomePage.js";
import BooksPage from "./pages/BooksPage.js";
import DetailsPage from "./pages/Details/DetailsPage"
import data from "./data/data.json";
import ContactPage from "./pages/Contact/ContactPage"
import CartPage from "./pages/Cart/CartPage.js";

class App extends React.Component {
  state = {
    books: data,
  };
  render() {
    return (
      <>
        {/* <HomePage books={this.state.books} /> */}
        {/* <BooksPage books={this.state.books} /> */}
        {/* <DetailsPage books={this.state.books}/> */}
        <ContactPage />
        {/* <CartPage /> */}
      </>
    );
  }
}

export default App;
