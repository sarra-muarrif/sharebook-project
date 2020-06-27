import React from "react";
import { NavLink } from "react-router-dom";

class Book extends React.Component {
  render() {
    return (
      <li className="books">
        <NavLink exact to={`./details/${this.props.books.id}`}>
          {/* <a href={this.props.link} target="_blank"> */}
          <img
            src={this.props.books.volumeInfo.imageLinks.thumbnail}
            alt={this.props.books.volumeInfo.title}
          />
          {/* </a> */}
        </NavLink>
      </li>
    );
  }
}

export default Book;
