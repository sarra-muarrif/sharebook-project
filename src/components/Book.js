import React from "react";

class Book extends React.Component {
  render() {
    return (
      <li className="books">
        <a href="#">
          <img
            src={require("../img/" + this.props.image.split("/")[2])}
            alt="book cover"
            width="300px"
          />
        </a>
      </li>
    );
  }
}

export default Book;
