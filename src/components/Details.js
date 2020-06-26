import React from "react";

class Details extends React.Component {
  render() {
    return (
      <section className="detail">
        <div className="container">
          <div className="book-preview">
            <img
              src={this.props.books[1].volumeInfo.imageLinks.thumbnail}
              className="main-photo"
              alt="book cover"
            />
            <a href="/" className="add-to-cart">
              Add To Cart
            </a>
            <p>Saler : Sara</p>
          </div>
          <div className="book-detail">
            <div className="book-overview">
              <h2 className="book-title">
                {this.props.books[1].volumeInfo.title}
              </h2>
              <div>
                <h2 className="book-price">
                  {this.props.books[1].id}
                  <span>
                    <i className="fas fa-star" style={{ color: "yellow" }} />
                    <i className="fas fa-star" style={{ color: "yellow" }} />
                    <i className="fas fa-star" style={{ color: "yellow" }} />
                    <i className="fas fa-star" style={{ color: "yellow" }} />
                    <i className="fas fa-star" style={{ color: "yellow" }} />
                  </span>
                </h2>
              </div>
            </div>
            <div className="book-description">
              <p>{this.props.books[1].volumeInfo.description}</p>
            </div>
            <div className="book-info">
              <p id="book-Author">
                Author: {this.props.books[1].volumeInfo.authors}
              </p>
              <p id="book-PubYear">
                Pub. Year: {this.props.books[1].volumeInfo.publishedDate}
              </p>
              <p id="book-Pages">
                Pages: {this.props.books[1].volumeInfo.pageCount}
              </p>
            </div>
          </div>
        </div>
        <div className="other-options">
          <h3>other options</h3>
        </div>
      </section>
    );
  }
}

export default Details;
