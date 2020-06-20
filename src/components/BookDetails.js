import React from "react";
import { NavLink } from "react-router-dom";
import AddToCartButton from "./AddToCartButton.js";

class BookDetails extends React.Component {
  render() {
    return (
      <>
        <div className="book-details">
          <li>
            <div className="price">{this.props.price}</div>
            <NavLink exact to="./details">
              <img
                src={require("../img/" + this.props.image.split("/")[2])}
                alt="book cover"
              />
            </NavLink>
            <AddToCartButton />
          </li>
        </div>
      </>
    );
  }
}

export default BookDetails;
