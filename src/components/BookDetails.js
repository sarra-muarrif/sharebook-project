import React from "react";
import { NavLink } from "react-router-dom";
import AddToCartButton from "./AddToCartButton.js";

class BookDetails extends React.Component {
  render() {
    const { book, price } = this.props;
    return (
      <>
        <div className="book-details">
          <li>
            <div className="price">{price}</div>

            <NavLink exact to={`/details/${book.id}`}>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="book cover"
              />
            </NavLink>
            <AddToCartButton onClick={() => this.props.catchItem(book)} />
          </li>
        </div>
      </>
    );
  }
}

export default BookDetails;
