import React, { Component } from "react";
import shortid from "shortid";

class SellerPage extends Component {
  state = {
    id: "",
    title: "",
    price: "",
    type: "",
  };
  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // handle submit
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      title: this.state.title,
      price: this.state.price,
      type: this.state.type,
    });
    this.setState({ title: "", price: "", type: "" });
  };
  // take value from select type
  handelSelectType = (e) => {
    this.setState({ type: e.target.value });
  };

  render() {
    const { booksSell, deleteBookSell } = this.props;
    console.log(booksSell, "booksell");
    return (
      <>
        <section className="section-seller">
          <div className="container">
            <div className="sign-out">
              <a href="/">sign out</a>
            </div>
            <div className="seller-name">
              <h1>
                welcome <span>Sara</span>
              </h1>
            </div>
            <div className="hero-seller">
              <h2>share book</h2>
            </div>
            <form className="form-seller" onSubmit={this.handleSubmit}>
              <input
                id="book-name"
                name="title"
                value={this.state.title}
                type="text"
                placeholder="enter book name"
                onChange={this.handelChange}
              />
              <input
                id="book-price"
                type="text"
                name="price"
                value={this.state.price}
                placeholder="price"
                onChange={this.handelChange}
              />
              <label id="type">Type:</label>
              <select
                id="book-type"
                name="type"
                value={this.state.type}
                onChange={this.handelSelectType}
              >
                <option value="paper">Paper</option>
                <option value="Digital">Digital</option>
              </select>
            </form>
            <div>
              <button className="add-btn" onClick={this.handleSubmit}>
                Add
              </button>
            </div>
            <div className="your-book">
              <h2>Your Books</h2>
            </div>
            {booksSell.map((bookSell) => {
              return (
                <div className="book-group" key={bookSell.id}>
                  <div className="book-group-image">
                    {/* <img
                  src={books[0].volumeInfo.imageLinks.thumbnail}
                  width="200"
                  alt="book cover"
                /> */}
                    <div className="book-group-desc">
                      <h2>{bookSell.title}</h2>
                      <h2>Price:{`${bookSell.price}$`}</h2>
                      <h2>Type:{bookSell.type}</h2>
                    </div>
                  </div>
                  <div className="remove-group">
                    <button
                      className="remove-btn group "
                      onClick={() => deleteBookSell(bookSell.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}
export default SellerPage;
