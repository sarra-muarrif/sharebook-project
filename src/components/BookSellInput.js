import React from "react";
import ShortId from "shortid";

class BookSellInput extends React.Component {
  state = {
    id: "",
    image: "",
    title: "",
    price: "",
    type: "Paper",
  };

  validate() {
    if (this.state.title === "" || this.state.price === "") {
      return false;
    }
    return true;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      id: ShortId.generate(),
      title: this.state.title,
      price: this.state.price,
      type: this.state.type,
    });
    this.setState({
      title: "",
      price: "",
    });
  };
  render() {
    return (
      <div>
        <form className="form-seller">
          <input
            id="book-img"
            type="file"
            name="image"
            value={this.state.image}
            placeholder="load image"
            onChange={this.handleChange}
          />
          <input
            id="book-name"
            name="title"
            value={this.state.title}
            type="text"
            placeholder="enter book name"
            onChange={this.handleChange}
          />
          <div className="error">
            {!this.validate() && <p>THIS FIELD IS REQUIRED!</p>}
          </div>
          <input
            id="book-price"
            name="price"
            value={this.state.price}
            type="text"
            placeholder="price"
            onChange={(event) => {
              if (isNaN(Number(event.target.value))) {
                return;
              } else {
                this.setState({ price: event.target.value });
              }
            }}
          />
          <div className="error">
            {!this.validate() && <p>THIS FIELD ACCEPT ONLY NUMBER!</p>}
          </div>
          <label id="type">Type:</label>
          <select
            id="book-type"
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
          >
            <option value="paper">Paper</option>
            <option value="Digital">Digital</option>
          </select>
        </form>
        <button
          className="add-btn"
          onClick={this.handleSubmit}
          disabled={!this.validate()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default BookSellInput;
