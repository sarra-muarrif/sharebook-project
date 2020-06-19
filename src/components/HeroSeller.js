import React from 'react';
const HeroSeller = () => {
    return(
        <div className="container">
            <div className="searchWrapper">
            <h1 className="Title-hero-ShareBook">ShareBook</h1>
            <div className="buffer"></div>  
            <input className="searchInput" type="search" name="search" placeholder="Enter Book Name..."/>
            </div>
            <div className="card-hero">
               <input className="price-hero-saler" type="text" placeholder="Price"/>
               { <select className="select-Type-saler">
                   <option value="">نوع الكتاب</option>
                   <option value="Paper">Paper</option>
                   <option value="Digitel">Digital</option>
                </select> }
                <input className="load-image-saler" type="img" placeholder="Load Image" />
            </div>
            <div className="card-saler card-hero">
                <a className="price-hero-saler is-active" href="" >Add</a>
                <a className="price-hero-saler is-active" href="">remove</a>
            </div>
        </div>
    )
}

export default HeroSeller;