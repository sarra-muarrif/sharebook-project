import React, {Component} from 'react';
import Footer from '../components/footer';


class Signin extends Component {
    render(){
        return(
            <>  
                <header className="navbar-header">
                    <h2>Sign in</h2>
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
                            <input className="email-active" type="Email" placeholder="Email" required /><br/>
                            <input className="password-active" type="password" placeholder="Password" />
                            <input className="Register active" type="submit" placeholder="Register"/>
                        </form>
                        
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}
export default Signin