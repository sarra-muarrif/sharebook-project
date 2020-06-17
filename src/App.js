import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
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
      <BrowserRouter>
        <Header />
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
              return <HomePage {...props} books={this.state.books} />;
            }}
          />
          <Route
            exact
            path="/cart"
            render={(props) => {
              return <HomePage {...props} books={this.state.books} />;
            }}
          />
          <Route
            exact
            path="/detils"
            render={(props) => {
              return <HomePage {...props} books={this.state.books} />;
            }}
          />
        </>
        <Footer />
      </BrowserRouter>

    );
  }
}

export default App;
