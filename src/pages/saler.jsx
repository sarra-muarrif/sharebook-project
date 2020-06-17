import React, {Component} from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import YourBook from '../components/book';
import Footer from '../components/footer';

class Saler extends Component {
    render(){
        return(
            <>
            <Header/>
            <Hero/>
            <YourBook/>
            <Footer/>
            </>
        )
    }
}
export default Saler