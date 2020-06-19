import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import HomePage from "./pages/HomePage.js";
import BooksPage from "./pages/BooksPage.js";
import DetailsPage from "./pages/DetailsPage.js";
import data from "./data/data.json";
import ContactPage from "./pages/ContactPage.js";
import CartPage from "./pages/CartPage.js";
import Header from "./components/Header.js";
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import SellerPage from "./pages/SellerPage"


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
            path="/sign-in"
            render={(props) => {
              return <SignInPage />;
            }}
          />
          <Route
            exact
            path="/sign-up"
            render={(props) => {
              return <SignUpPage />;
            }}
          />
           <Route
            exact
            path="/seller"
            render={(props) => {
              return <SellerPage />;
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
            path="/details"
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
