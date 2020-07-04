import React from "react";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome.js";
import AboutUs from "../components/AboutUs.js";
import BookGrid from "../components/BookGrid";

class HomePage extends React.Component {
  render() {
    //Filter Books
    const filterBooks = this.props.books.filter((book) => {
      return (book.language = "en");
    });
    console.log(filterBooks,"filterbooks")
    //Featured Books
    const averageRating = filterBooks.filter((book) => {
      return (book.volumeInfo.averageRating)
        ? (book.volumeInfo.averageRating)
        : (book.volumeInfo.averageRating = 2);
    });
    const featuredBooks = averageRating.sort((book1, book2) => {
      return book1.volumeInfo.averageRating > book2.volumeInfo.averageRating
        ? -1
        : 1;
    });
    
   //New Books
   const sortData = filterBooks.sort((book1, book2) => {
     return new Date(book1.volumeInfo.publishedDate) > new Date(book2.volumeInfo.publishedDate) ? -1 : 1;
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
          books={featuredBooks}
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
