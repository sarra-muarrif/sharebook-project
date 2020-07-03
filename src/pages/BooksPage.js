import React from "react";

import BookGridDetails from "../components/BookGridDetails.js";
import Header from "../components/Header.js";

class BooksPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="section hero-searchBook ">
          <div className="container">
            <div className="searchBook-img">
              <div className="searchBook-img-bacground">
                <p>so many books ,so little time</p>
                <h3>in search for the best book</h3>
                <div className="search-bar">
                  <input
                    type="text"
                    id="search-book"
                    placeholder={this.props.query}
                    name="search-book"
                    onChange={this.props.handleChange}
                  />
                  <button id="search-btn" onClick={this.props.handleSearch}>
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BookGridDetails
          title="other options"
          gridtype="featured-books"
          classname="featured-books-title"
          limit={4}
          books={this.props.books}
        />
      </>
    );
  }
}
export default BooksPage;
