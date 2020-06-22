import React, { Component } from "react";
import img1 from "../img/img-1.png";
class SellerPage extends Component {
  render() {
    const books = this.props.books;
    console.log(books[0].image, "book");
    return (
      <>
        <section className="section-seller">
          <div className="container">
            <div className="sign-out">
              <a>sign out</a>
            </div>
            <div className="seller-name">
              <h1>
                welcome <span>sara</span>
              </h1>
            </div>
            <div className="hero-seller">
              <h2>share book</h2>
            </div>
            <form className="form-seller">
              {/* <input id="book-image" type="image" placeholder="loade image" /> */}
              <input id="book-name" type="text" placeholder="enter book name" />
              <input id="book-price" type="text" placeholder="price" />
              <label id="type" for="book-type">
                type:
              </label>
              <select id="book-type">
                <option value="paper">paper</option>
                <option value="Digital">Digital</option>
              </select>
            </form>
            <div>
              <button className="add-btn">add</button>
              <button className="remove-btn">remove</button>
            </div>
            <div className="your-book">
              <h2>your books</h2>
            </div>
            <div className="book-group">
              <div className="book-group-image">
                <img src={img1} width="200" />
                <div className="book-group-desc">
                  <h2>{books[0].title}</h2>
                  <h2>type:paper</h2>
                </div>
              </div>
              <div className="remove-group">
                <button className="remove-btn group ">remove</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default SellerPage;
