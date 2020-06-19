import React from "react";
import Img1 from "../img/img-1.png";
import Img2 from "../img/img-2.png";
const BookSeller = () => {
  return (
    <>
      <section className="card-box">
        <div className="container">
          <h2>Your Book</h2>
          <div className="background-saler1">
            <div className="Type-Backgruond-1">
              <p className="box-Yourbook">
                130 Home Cooked Meals
                <p className="box-Yourbook is-active">Type: Paper</p>
                <a herf="www.google.com" className="remove-book buffer">
                  remove
                </a>
              </p>
              <img
                className="image-book box-Yourbook"
                src={Img2}
                alt="Rectangle"
                width="300"
              />
            </div>
          </div>
          <br />
          <div className="background-saler1">
            <div className="Type-Backgruond-1">
              <p className="box-Yourbook">
                130 Home Cooked Meals
                <p className="box-Yourbook is-active">Type: Paper</p>{" "}
                <a herf="#" className="remove-book buffer">
                  remove
                </a>
              </p>
              <img className="image-book box-Yourbook" src={Img1} width="300" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BookSeller;
