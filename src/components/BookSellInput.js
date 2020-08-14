import React from "react";

class BookSellInput extends React.Component {
  state = {
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
  onChangeHandlerImg = (e) => {
    this.setState({
      image: e.target.files[0],
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(e.target)
    e.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
      price: this.state.price,
      type: this.state.type,
      image: this.state.image
    });
    this.setState({
      title: "",
      price: "",
      image: ""
    });
  };
  render() {
    return (
      <div>
        <form className="form-seller" >
          <input
            id="book-img"
            type="file"
            name="image"
            onChange={this.onChangeHandlerImg}
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
            {this.state.title === "" && <p>THIS FIELD IS REQUIRED!</p>}
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
            {this.state.price === "" && <p>THIS FIELD ACCEPT ONLY NUMBER!</p>}
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
