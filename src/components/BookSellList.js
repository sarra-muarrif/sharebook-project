import React from "react";
class BookSellList extends React.Component {
  render() {
    const { onDelete, items } = this.props;
    return (
      <>
        <div className="your-book">
          <h2>Your Books</h2>
          {items.lenght > 0 ? (
            items.map((item) => {
              return (
                <>
                  <div className="book-group" key={item.id}>
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
                      onClick={() => onDelete(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </>
              );
            })
          ) : (
            <div>
              <h3
                className="no-order"
                style={{ color: "red", fontSize: "20px" }}
              >
                No Books yet!
              </h3>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default BookSellList;
