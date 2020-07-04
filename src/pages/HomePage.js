import React from "react";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome.js";
import AboutUs from "../components/AboutUs.js";
import BookGrid from "../components/BookGrid";

class HomePage extends React.Component {
  render() {
    //Featured Books
    const filterItems = this.props.books.filter((book) => {
      return (book.isEbook = true);
    });
    //New Books
    const filterBooks = this.props.books.filter((book) => {
      return (book.kind = "books");
    });
    const sortData = filterBooks.sort((book1, book2) => {
      return new Date(book1.volumeInfo.publishedDate) >
        new Date(book2.volumeInfo.publishedDate)
        ? -1
        : 1;
    });
    return (
      <>
        <Header />
        <HeroHome />
        <BookGrid
          title="featured books"
          gridtype="featured-books"
          classname="featured-books-title"
          limit={4}
          books={filterItems}
        />
        <BookGrid
          title="new books"
          gridtype=" New-books"
          classname="new-books-title"
          limit={4}
          books={sortData}
        />
        <AboutUs />
      </>
    );
  }
}
export default HomePage;
