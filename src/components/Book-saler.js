import React from 'react';
import Rectangle from '../images/Rectangle.png';
import Rectangle2 from '../images/Rectangle2.png';
const YourBook = () => {
    return(
        <>
        <section className="card-box">
        <div className="container">
        <h2>Your Book</h2>
        <div className="background-saler1">
        <div className="Type-Backgruond-1">
          <p className="box-Yourbook">130 Home Cooked Meals<p className="box-Yourbook is-active">Type: Paper</p><a herf="www.google.com" className="remove-book buffer">remove</a></p>
        <img  className="image-book box-Yourbook" src={Rectangle2} alt="Rectangle" />
        </div>
        </div><br/>
        <div className="background-saler1">
        <div className="Type-Backgruond-1">
          <p className="box-Yourbook">130 Home Cooked Meals<p className="box-Yourbook is-active">Type: Paper</p> <a herf="#" className="remove-book buffer">remove</a></p>
        <img  className="image-book box-Yourbook" src={Rectangle} />
        </div>
        </div>
        </div>
        </section>
        </>
    )
}
export default YourBook