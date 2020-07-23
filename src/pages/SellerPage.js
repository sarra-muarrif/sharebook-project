import React from "react";
import ShortId from "shortid";
import BookSellInput from "../components/BookSellInput.js";
import BookSellList from "../components/BookSellList.js";
class SellerPage extends React.Component {
  state = {
    items: [],
  };

  addItem = (item) => {
    const newItems = [item, ...this.state.items];
    this.setState({
      items: newItems,
    });
  };

  deleteItem = (id) => {
    const deleteItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: deleteItem,
    });
  };

  render() {
    return (
      <>
        <section className="section-seller">
          <div className="container">
            <div className="sign-out">
              <a href="/">sign out</a>
            </div>
            <div className="seller-name">
              <h1>
                welcome <span>Sara</span>
              </h1>
            </div>
            <div className="hero-seller">
              <h2>share book</h2>
            </div>
            <BookSellInput onSubmit={this.addItem} />
            <div className="your-book">
              <h2>Your Books</h2>
              {this.state.items.length > 0 ? (
                <BookSellList
                  items={this.state.items}
                  onDelete={this.deleteItem}
                />
              ) : (
                <div>
                  <h3 className="no-book">No Books yet!</h3>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default SellerPage;
