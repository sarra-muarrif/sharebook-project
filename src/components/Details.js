import React from "react";
import StarRating from "./StarRating.js";
import AddToCartButton from "./AddToCartButton.js";

class Details extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  state = {
    showMore: false,
  };
  //Show-More
  showMore = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const book = this.props.book;
    const price = this.props.filterPrice;
    //Filter averageRating
    const averageRating = book.volumeInfo.averageRating
      ? book.volumeInfo.averageRating
      : 2;
    return (
      <section className="detail">
        <div className="container">
          <div className="book-preview">
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              className="main-photo"
              alt={book.volumeInfo.title}
            />
            <AddToCartButton onClick={() => this.props.catchItem(book)} />
          </div>
          <div className="book-detail">
            <div className="book-overview">
              <h2 className="book-title">{book.volumeInfo.title}</h2>
              <div>
                <h2 className="book-price">
                  {`${price}$`}
                  
                  <StarRating book={book} averageRating={averageRating} />
                </h2>
              </div>
            </div>
            <div className="book-description">
              <p>
                {this.state.showMore
                  ? book.volumeInfo.description
                  : book.volumeInfo.description.slice(0, 99)}
                {book.volumeInfo.description.length >= 109 ? (
                  <button className="showMore" onClick={() => this.showMore()}>
                    {this.state.showMore ? "show less" : "show more"}
                  </button>
                ) : null}
              </p>
            </div>
            <div className="book-info">
              <p id="book-Author">Author: {book.volumeInfo.authors}</p>
              <p id="book-PubYear">
                Pub. Year: {book.volumeInfo.publishedDate}
              </p>
              <p id="book-Pages">Pages: {book.volumeInfo.pageCount}</p>
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
