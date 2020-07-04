import React from "react";
import CartGrid from "../components/CartGrid";

class CartPage extends React.Component {
  render() {
    const bookId = this.props.match.params.id;
    const { handleDelete } = this.props;

    return (
      <>
        <CartGrid
          books={this.props.books}
          orderBook={this.props.orderBook}
          id={bookId}
          handleDelete={handleDelete}
        />
      </>
    );
  }
}

export default CartPage;
