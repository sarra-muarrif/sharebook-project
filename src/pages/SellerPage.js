import React, { Component } from "react";
import img1 from "../img/img-1.png";
import Header from "../components/Header";
class SellerPage extends Component {
  render() {
    const books = this.props.books;
    console.log(books[0].image, "book");
    return (
      <>
        <Header />
        <section className="section-seller">
          <div className="container">
            <div className="sign-out">
              <a>sign out</a>
            </div>
            <div className="seller-name">
              <h1>
                welcome <span>Sara</span>
              </h1>
            </div>
            <div className="hero-seller">
              <h2>share book</h2>
            </div>
            <form className="form-seller">
              <input id="book-name" type="text" placeholder="enter book name" />
              <input id="book-price" type="text" placeholder="price" />
              <label id="type" for="type">
                Type:
              </label>
              <select id="book-type">
                <option value="paper">Paper</option>
                <option value="Digital">Digital</option>
              </select>
            </form>
            <div>
              <button className="add-btn">Add</button>
              <button className="remove-btn">Remove</button>
            </div>
            <div className="your-book">
              <h2>Your Books</h2>
            </div>
            <div className="book-group">
              <div className="book-group-image">
                <img src={img1} width="200" />
                <div className="book-group-desc">
                  <h2>{books[0].title}</h2>
                  <h2>Type:Paper</h2>
                </div>
              </div>
              <div className="remove-group">
                <button className="remove-btn group ">Remove</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default SellerPage;
