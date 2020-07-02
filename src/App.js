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
import { END_POINT, API_KEY } from "./constants/urls";

class App extends React.Component {
  state = {
    books: [],
    orderBook:[],
    item: 0
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`${END_POINT}&key=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ books: res.items });
      })
      .catch((err) => console.log(err));
  };
// add the book in the cart
  catchItem = (item) => {
    this.setState({orderBook: [...this.state.orderBook, item]}) 
};
// Delete the book in cart
handleDelete = (id) => {
 let books = this.state.books
 let i = books.findIndex(item => item.id ===id)
 books.splice(i, 1)
 this.setState({books})
};


  render() {
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
              return <BooksPage {...props} books={this.state.books} />;
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
              return <CartPage {...props} books={this.state.books} orderBook={this.state.orderBook} handleDelete={this.handleDelete} />;
            }}
          />
          <Route
            exact
            path="/details/:id"
            render={(props) => {
              return <DetailsPage {...props} books={this.state.books} catchItem={this.catchItem}  />;
            }}
          />
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
