import React, {Component} from 'react';
import Footer from '../components/footer';


class Signup extends Component {
    render(){
        return(
            <>  
                <header className="navbar-header">
                    <h2>Sign up</h2>
                </header>
                <section className="searchWrapper">
                    <h1 className="Title-hero-ShareBook">ShareBook</h1>
                    <form className="card-hero">
                        <input className="price-hero-saler" type="submit" placeholder="Reader" />
                        <input className="price-hero-saler" type="submit" placeholder="Saler" />
                    </form>
                    <p className="text-signin-signup">New Customer! Start Here<a href="#"> Sign in </a>Now</p>
                    <div className="signin-signup">
                        <form className="form-signin-signup">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" /><br/>
                            <input className="email-active" type="Email" placeholder="Email" required /><br/>
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm Password" /><br/>
                            <input className="Register active" type="submit" placeholder="Register"/>
                        </form>
                        
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}
export default Signup