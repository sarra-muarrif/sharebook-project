import React from "react";

import Header from "../components/Header.js";
import Searchbook from "../components/SearchBook.js";
import Footer from "../components/Footer.js"

 class BooksPage extends React.Component {
     render(){
         return (
             <>
             <Header />
             <Searchbook />
             <Footer />
            </>
         );
     }

 }

 export default BooksPage;