import React from "react";
import { NavLink } from "react-router-dom";
import AddToCartButton from "./AddToCartButton.js";

class BookDetails extends React.Component {
  render() {
    const { book, catchItem } = this.props;
    return (
      <>
        <div className="book-details">
          <li>
            <div className="price">{this.props.price}</div>
            <NavLink exact to={`/details/${this.props.id}`}>
              <img src={this.props.image} alt="book cover" />
            </NavLink>
            <AddToCartButton item={book} catchItem={catchItem} />
          </li>
        </div>
      </>
    );
  }
}

export default BookDetails;
