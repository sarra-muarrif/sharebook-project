import React from "react";
import { NavLink } from "react-router-dom";

class Book extends React.Component {
  render() {
    return (
      <li className="books">
        <NavLink exact to="./details">
          <img
            src={require("../img/" + this.props.image.split("/")[2])}
            alt="book cover"
          />
        </NavLink>
      </li>
    );
  }
}

export default Book;
