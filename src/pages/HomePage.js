import React from "react";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome.js";
import AboutUs from "../components/AboutUs.js";
import BookGrid from "../components/BookGrid";

class HomePage extends React.Component {
  render() {
    // const q = "flowers&key=AIzaSyB5rElTrudeCdlBNu_TM5k0YIQIOjWKpKQ";
    // const END_POINT = "https://www.googleapis.com/books/v1/volumes";
    // const API_KEY = "AIzaSyB5rElTrudeCdlBNu_TM5k0YIQIOjWKpKQ";
    // fetch(`${END_POINT}?q=${q}&key=${API_KEY}`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.error) {
    //       throw new Error();
    //     }
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
    return (
      <>
        <Header />
        <HeroHome />
        <BookGrid
          title="featured books"
          gridtype="featured-books"
          classname="featured-books-title"
          limit={4}
          books={this.props.books}
        />
        <BookGrid
          title="new books"
          gridtype=" New-books"
          classname="new-books-title"
          limit={4}
          books={this.props.books}
        />
        <AboutUs />
      </>
    );
  }
}
export default HomePage;
