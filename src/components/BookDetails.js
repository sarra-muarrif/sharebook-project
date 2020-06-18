import React from "react"
import AddToCartButton from "./AddToCartButton.js"

class BookDetails extends React.Component{
    render(){
        return(
            <>
            <div className="book-details">
            <h1>{this.props.price}</h1>
            <img
            src={require("../img/" + this.props.image.split("/")[2])}
            alt="book cover"
            width="300px"
          />
          <AddToCartButton />
          </div>
            </>
        );
    }
}

export default BookDetails;