import React from "react";
class BookSellList extends React.Component {
  render() {
    const { onDelete, items } = this.props;
    return (
      <>
        {items.map((item) => {
          return (
            <div key={item._id}>
              <div className="book-group">
                <div className="book-group-image">
                  <img width="200" alt="book cover" />
                  <div className="book-group-desc">
                    <h2>{item.title}</h2>
                    <h2>Price:{item.price}</h2>
                    <h2>Type:{item.type}</h2>
                  </div>
                </div>
              </div>
              <div className="remove-group">
                <button
                  className="remove-btn group "
                  onClick={() => onDelete(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default BookSellList;
