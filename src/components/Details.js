import React from "react";
import img1 from "../img/img-1.png";
import ImgStar from "../img/star.svg";

class Details extends React.Component {
  render() {
    return (
      <section className="detail">
        <div className="container">
          <div className="book-preview">
            <img src={img1} className="main-photo" alt="book cover" />
            <a href="/" className="add-to-cart">
              Add To Cart
            </a>
            <p>Saler : Sara</p>
          </div>
          <div className="book-detail">
            <div className="book-overview">
              <h2 className="book-title">{this.props.books[0].title}</h2>
              <div>
                <h2 className="book-price">
                  {this.props.books[0].price}
                  <span>
                    <img src={ImgStar} alt="star" width="30px" />
                    <img src={ImgStar} alt="star" width="30px" />
                    <img src={ImgStar} alt="star" width="30px" />
                    <img src={ImgStar} alt="star" width="30px" />
                    <img src={ImgStar} alt="star" width="30px" />
                  </span>
                </h2>
              </div>
            </div>
            <div className="book-description">
              <p>{this.props.books[0].description}</p>
            </div>
            <div className="book-info">
              <p id="book-Author">Author: {this.props.books[0].Author}</p>
              <p id="book-PubYear">Pub. Year: {this.props.books[0].PubYear}</p>
              <p id="book-Pages">Pages: {this.props.books[0].Pages}</p>
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
