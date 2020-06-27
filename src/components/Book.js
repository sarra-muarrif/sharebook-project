import React from "react";
import { NavLink } from "react-router-dom";

class Book extends React.Component {
  render() {
    return (
      <li className="books">
        <NavLink exact to={`./details/${this.props.book.id}`}>
          <img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt={this.props.book.volumeInfo.title} />
        </NavLink>
      </li>
    );
  }
}

export default Book;
