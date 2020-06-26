import React from "react";
import { NavLink } from "react-router-dom";

class Book extends React.Component {
  render() {
    return (
      <li className="books">
        <NavLink exact to="./details">
          {/* <a href={this.props.link} target="_blank"> */}
          <img src={this.props.image} alt="book cover" />
          {/* </a> */}
        </NavLink>
      </li>
    );
  }
}

export default Book;
