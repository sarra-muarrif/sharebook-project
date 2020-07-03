import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import BooksPage from "./pages/BooksPage.js";
import DetailsPage from "./pages/DetailsPage.js";
import ContactPage from "./pages/ContactPage.js";
import CartPage from "./pages/CartPage.js";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import SellerPage from "./pages/SellerPage";
import Footer from "./components/Footer";
import { API_KEY, SEARCH_POINT } from "./constants/urls";

class App extends React.Component {
  state = {
    books: [],
    query: "cats",
  };
  handleChange = (evt) => {
    this.setState({ query: evt.target.value });
  };
  handleSearch = (event) => {
    this.fetchData();
  };
  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`${SEARCH_POINT}?q=${this.state.query}&key=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => this.setState({ books: [...res.items] }))
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.state.query);
    return (
      <BrowserRouter>
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
              return <SellerPage books={this.state.books} />;
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
              return (
                <BooksPage
                  {...props}
                  query={this.state.query}
                  handleSearch={this.handleSearch}
                  handleChange={this.handleChange}
                  books={this.state.books}
                />
              );
            }}
          />
          <Route
            exact
            path="/contact"
            render={(props) => {
              return <ContactPage {...props} />;
            }}
          />
          <Route
            exact
            path="/cart"
            render={(props) => {
              return <CartPage {...props} books={this.state.books} />;
            }}
          />
          <Route
            exact
            path="/details/:id"
            render={(props) => {
              return <DetailsPage {...props} books={this.state.books} />;
            }}
          />
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
