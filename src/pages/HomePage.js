import React from "react";
import HeroHome from "../components/HeroHome.js";
import AboutUs from "../components/AboutUs.js";
import BookGrid from "../components/BookGrid";

class HomePage extends React.Component {
  render() {
    return (
      <>
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
