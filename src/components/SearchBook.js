import React from "react";

class SearchBook extends React.Component {
  render() {
    // state ={
    //   searchTerm: '',
    // }
    //  onChangeHandler = (event) =>{
    //    console.log(event.target.value);
    //  }
    return (
      <section className="section hero-searchBook ">
        <div className="container">
          <div className="searchBook-img">
            <div className="searchBook-img-bacground">
              <p>so many books ,so little time</p>
              <h3>in search for the best book</h3>
              <div className="search-bar">
                <input
                  type="text"
                  id="search-book"
                  placeholder="Enter name of book"
                 
                />
                <button id="search-but">search</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBook;
