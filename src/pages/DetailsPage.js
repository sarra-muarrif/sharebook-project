import React from "react";
import Header from "../components/Header";
import img1 from "../img/img-1.png";
import ImgStar from "../img/star.svg";
import BookGridDetails from "../components/BookGridDetails.js";

const DetailsPage = (props) => {
  return (
    <>
      <Header />
      <section className="detail">
        <div className="container">
          <div className="book-preview">
            <img src={img1} className="main-photo" alt="book cover" />
            <a href="/" className="add-to-cart">
              Add To Cart
            </a>
            <p>Saler : Sara</p>
          </div>
          <div className="book-overview">
            <h2 className="book-title">{props.books[0].title}</h2>
            <h2 className="book-price">
              {props.books[0].price}
              {
                <span>
                  <img src={ImgStar} alt="star" width="30px" />
                  <img src={ImgStar} alt="star" width="30px" />
                  <img src={ImgStar} alt="star" width="30px" />
                </span>
              }
            </h2>
            <p className="book-description">{props.books[0].description}</p>
            <p className="book-Author">Author: {props.books[0].Author}</p>
            <p className="book-PubYear">Pub. Year: {props.books[0].PubYear}</p>
            <p className="book-Pages">Pages: {props.books[0].Pages}</p>
          </div>
        </div>
      </section>
      <h1 className="other-options">Other Options</h1>
      <BookGridDetails books={props.books} limit={3} />
    </>
  );
};

export default DetailsPage;
