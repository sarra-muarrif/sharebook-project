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
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      books: [],
      query: "cats",
      orderBook: [],
      item: 0,
      price: "12",
    };
  }
  //handle search value in booksPage
  handleChange = (evt) => {
    this.setState({ query: evt.target.value });
  };
  //handle search in booksPage
  handleSearch = (event) => {
    this.fetchData();
  };
  componentWillMount() {
    localStorage.getItem("orderBook") &&
      this.setState({
        orderBook: JSON.parse(localStorage.getItem("orderBook")),
        isLoading: false
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem("orderBook", JSON.stringify(nextState.orderBook));
    localStorage.setItem("orderBookData", Date.now());
  }
  //fetch data with query from API
  fetchData() {
    fetch(`${SEARCH_POINT}?q=${this.state.query}&key=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => this.setState({ books: [...res.items] }))
      .catch((err) => console.log(err));
  }

  // add the book in the cart
  catchItem = (product) => {
    const orderBook = this.state.orderBook.slice();

    let alreadyInCart = false;
    orderBook.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      orderBook.push({ ...product, count: 1 });
      //  localStorage.setItem("my-tier-list", JSON.stringify(orderBook));
    }
    this.setState({ orderBook });

    // this.setState({ orderBook: [...this.state.orderBook, item] });
  };

  // Delete the book in cart
  handleDelete = (id) => {
    let itemDelete = this.state.orderBook;
    let i = itemDelete.findIndex((item) => item.id === id);
    itemDelete.splice(i, 1);
    this.setState({ itemDelete });
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
              return (
                <SellerPage
                  books={this.state.books}
                  orderBook={this.state.orderBook}
                />
              );
            }}
          />
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <HomePage
                  {...props}
                  books={this.state.books}
                  orderBook={this.state.orderBook}
                />
              );
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
                  catchItem={this.catchItem}
                  orderBook={this.state.orderBook}
                  item={this.state.item}
                />
              );
            }}
          />
          <Route
            exact
            path="/contact"
            render={(props) => {
              return (
                <ContactPage {...props} orderBook={this.state.orderBook} />
              );
            }}
          />
          <Route
            exact
            path="/cart"
            render={(props) => {
              return (
                <CartPage
                  {...props}
                  books={this.state.books}
                  orderBook={this.state.orderBook}
                  handleDelete={this.handleDelete}
                  catchItem={this.catchItem}
                  price={this.state.price}
                  item={this.state.item}
                />
              );
            }}
          />
          <Route
            exact
            path="/details/:id"
            render={(props) => {
              return (
                <DetailsPage
                  {...props}
                  books={this.state.books}
                  catchItem={this.catchItem}
                  orderBook={this.state.orderBook}
                />
              );
            }}
          />
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
