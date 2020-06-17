import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import HomePage from "./pages/HomePage.js";
import BooksPage from "./pages/BooksPage.js";
import DetailsPage from "./pages/DetailsPage.js"
import data from "./data/data.json";
import ContactPage from "./pages/ContactPage.js"
import CartPage from "./pages/CartPage.js";

class App extends React.Component {
  state = {
    books: data,
  };
  render() {
    return (
      <BrowserRouter>
        <>
          <Route
            exact
            path="/lig in"
            render={(props) => {
              return <HomePage {...props} books={this.state.books}/>;
            }}
          />
          <Route
            exact
            path="/register"
            render={(props) => {
              return <HomePage {...props} books={this.state.books}/>;
            }}
          />
          <Route
            exact
            path="/about"
            render={(props) => {
              return <HomePage {...props} books={this.state.books}/>;
            }}
          />
          <Route
            exact
            path="/"
            render={(props) => {
              return <HomePage {...props} books={this.state.books} />;
            }}
          />
          <Route
            exact
            path="/books"
            render={(props) => {
              return <BooksPage {...props} books={this.state.books} />;
            }}
          />
          <Route
            exact
            path="/contact"
            render={(props) => {
              return <ContactPage {...props}  />;
            }}
          />
          <Route
            exact
            path="/cart"
            render={(props) => {
              return <CartPage {...props} />;
            }}
          />
          <Route
            exact
            path="/detils"
            render={(props) => {
              return <DetailsPage {...props} books={this.state.books} />;
            }}
          />
        </>
        <Footer />
      </BrowserRouter>

    );
  }
}

export default App;
