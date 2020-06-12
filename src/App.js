import React from "react";

import HomePage from "./pages/HomePage.js";
import BooksPage from "./pages/BooksPage.js";

import data from "./data/data.json";

class App extends React.Component {
  state = {
    books: data,
  };
  render() {
    return (
      <>
        <HomePage books={this.state.books} />
        {/* <BooksPage books={this.state.books} /> */}
      </>
    );
  }
}

export default App;
