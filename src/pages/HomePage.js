import React from "react";
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import FeaturedBooks from "../components/FeaturedBooks.js";
import NewBooks from "../components/NewBooks.js";
import AboutUs from "../components/AboutUs.js";
import Footer from "../components/Footer.js";


class HomePage extends React.Component {
 
  render() {
    return (
      <>
        <Header />
        <Hero />
        <FeaturedBooks books={this.props.books} />
        <NewBooks books={this.props.books} />
        <AboutUs />
        <Footer />
      </>
    );
  }
}
export default HomePage;
