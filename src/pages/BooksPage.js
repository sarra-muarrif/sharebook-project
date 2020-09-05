import React from "react";
import BookGridDetails from "../components/BookGridDetails.js";

class BooksPage extends React.Component {
  render() {
    const { books, catchItem, handleChange, handleSearch } = this.props;
    return (
      <>
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
                    placeholder="Enter Category to search"
                    name="search-book"
                    onChange={handleChange}
                  />
                  <button id="search-btn" onClick={handleSearch}>
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BookGridDetails limit={4} books={books} catchItem={catchItem} />
      </>
    );
  }
}
export default BooksPage;
